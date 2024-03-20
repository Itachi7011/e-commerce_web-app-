const mongoose = require("mongoose");
const DatabaseAddr = process.env.mongodbAddress;

mongoose.connect(`${DatabaseAddr}`).then(()=>{
    console.log("connected to Database");
}).catch(err => {console.log("Error during database connection : ", err)});
