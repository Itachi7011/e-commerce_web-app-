const express = require("express");
const app =  express();
const PORT = process.env.port || 8000;

require("./Database/connection");

app.get("/test", (req, res)=>{
    res.send("Its Connected");
})



app.listen(PORT, ()=>{
    console.log("Server is running on port :",PORT);
})