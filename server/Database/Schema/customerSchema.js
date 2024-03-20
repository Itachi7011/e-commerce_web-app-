const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const newCustomerSchema = new mongoose.Schema({
  accountStatus: {
    type: String,
    default: "active",
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo_1: {
    type: Number,
  },
  fatherName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  age: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  fullAddress: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
  tokens: {
    type: String,
  },
});

newCustomerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
  }
  next();
});

newCustomerSchema.methods.generateAuthToken = async function () {
  try {
    let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
      expiresIn: "2592000000",
    });
    this.tokens = token1;
    await this.save();
    return token1;
  } catch (err) {
    console.log(err);
  }
};

const customerSchema = new mongoose.model("Customer_Info", newCustomerSchema);
module.exports = customerSchema;
