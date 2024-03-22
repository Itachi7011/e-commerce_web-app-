const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const newSellerSchema = new mongoose.Schema({
  accountStatus: {
    type: String,
    default: "active",
  },accountType: {
    type: String,
    default: "seller",
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
  products:{
    type: Array
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

newSellerSchema.pre("save", async function (next) {
  if (this.isModified('password')) {
    try {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (error) {
      return next(error);
    }
  }
  next();
});

newSellerSchema.methods.generateAuthToken = async function () {
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

const sellerSchema = new mongoose.model("Seller_Info", newSellerSchema);
module.exports = sellerSchema;
