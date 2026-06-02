//dotenv
require("dotenv").config();
//express
const express= require('express');
const mongoose = require('mongoose')

const app = express();
const morgan  = require('morgan');
//middlware jason
app.use(express.json());
//database
const connectedDB = require("./config/db");

connectedDB();
const adminRoute = require("./routes/auth.route");
app.use("/api/dashboard",adminRoute);
//simple logger
if(process.env.NODE_ENV === "dev"){
    app.use(morgan("dev"));
}

app.get("/test",(req,res)=>{
    res.json({Message:"Test Route"});
})
//port
const port  = process.env.PORT || 3000
//run server
app.listen(port,()=>{
    console.log(`Server is connected on ${port}`)
})