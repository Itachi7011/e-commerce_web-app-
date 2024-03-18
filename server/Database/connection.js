const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/E-Commerce_Web-App").then(()=>{
    console.log("connected to Database");
}).catch(err => {console.log("Error during database connection : ", err)});