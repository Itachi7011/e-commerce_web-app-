const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.port || 7000;
const alert = require("alert-node");

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const dotenv = require("dotenv");
dotenv.config({});

require("./Database/connection");
const customerSchemaDB = require("./Database/Schema/customerSchema");
const sellerSchemaDB = require("./Database/Schema/sellerSchema");

app.post("/newCustomerRegistration", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const DateOfBirth = req.body.dateOfBirth;
    const SubmittedDate = req.body.dateOfFormSubmission;

    const AlreadyUsedDatabase = await customerSchemaDB.findOne({
      email: Email,
    });

    function getAge(dateString) {
      var today = new Date();

      var birthDate = new Date(dateString);

      var age = today.getFullYear() - birthDate.getFullYear();

      var m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }

    if (Password === Cpassword) {
      if (AlreadyUsedDatabase) {
        alert(
          "Sorry! This email is already registered. \n Please use another email."
        );
        res.redirect("/CustomerRegistration");
      } else {
        const customerSchema = await new customerSchemaDB({
          name: req.body.name,
          email: Email,
          phoneNo_1: PhoneNo_1,
          accountStatus: "active",
          accountType: "customer",
          fatherName: req.body.fatherName,
          dateOfBirth: req.body.dateOfBirth,
          age: getAge(DateOfBirth),
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          fullAddress: req.body.fullAddress,
          dateOfFormSubmission: SubmittedDate,
          password: req.body.password,
        });

        await customerSchema.save();
        console.log("Saved in Database Successfully");
        alert(
          "New Seller Registered Successfully! \n Please Login to Continue"
        );
        res.redirect("/CustomerLogin");
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(` Error During Registeration of New Customer --> ${err} `);
  }
});

app.post("/newSellerRegistration", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const DateOfBirth = req.body.dateOfBirth;
    const SubmittedDate = req.body.dateOfFormSubmission;

    const AlreadyUsedDatabase = await sellerSchemaDB.findOne({ email: Email });

    function getAge(dateString) {
      var today = new Date();

      var birthDate = new Date(dateString);

      var age = today.getFullYear() - birthDate.getFullYear();

      var m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }

    if (Password === Cpassword) {
      if (AlreadyUsedDatabase) {
        alert(
          "Sorry! This email is already registered. \n Please use another email."
        );
      } else {
        const sellerSchema = await new sellerSchemaDB({
          name: req.body.name,
          email: req.body.email,
          phoneNo_1: PhoneNo_1,
          accountStatus: "active",
          accountType: "customer",
          fatherName: req.body.fatherName,
          dateOfBirth: req.body.dateOfBirth,
          age: getAge(DateOfBirth),
          country: req.body.country,
          state: req.body.state,
          district: req.body.district,
          fullAddress: req.body.fullAddress,
          products: req.body.products,
          dateOfFormSubmission: SubmittedDate,
          password: req.body.password,
        });

        await sellerSchema.save();
        console.log("Saved in Database Successfully");
        alert(
          "New Seller Registered Successfully! \n Please Login to Continue"
        );
        res.redirect("/SellerLogin");
      }
    } else {
      alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(` Error During Registration of New Seller --> ${err} `);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
