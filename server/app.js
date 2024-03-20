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
const customerInfoSchema = require("./Database/Schema/customerSchema");





app.post("/newCustomerRegistration", async (req, res) => {
  try {
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    const Email = req.body.email;
    const PhoneNo_1 = req.body.phoneNo_1;
    const DateOfBirth = req.body.dateOfBirth;
    const SubmittedDate = req.body.dateOfFormSubmission;

    const AlreadyUsedDatabase = await customerInfoSchema.findOne({ email: Email });


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
      if(Email === AlreadyUsedDatabase.email){
        alert("Sorry! This email is already registered. \n Please use another email.");
        res.redirect("/CustomerRegistration");
      }else {
        if(Email === AlreadyUsedDatabase.phoneNo_1){
          alert("Sorry! This Phone No. is already registered. \n Please use another Phone No.");
          res.redirect("/CustomerRegistration");
        
        }else{
        const customerSchema = await new customerInfoSchema({
        name: req.body.name,
        email: Email,
        phoneNo_1: PhoneNo_1,
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
       alert("New Employee Registered Successfully! \n Please Login to Continue");
      res.redirect("/CustomerLogin");
      }
    }
      
    } else {
     alert("Sorry! Password And Confirm Passwords do not match.");
    }
  } catch (err) {
    console.log(` Error During Registering Scale 1 Employees --> ${err} `);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
