
const express = require("express");
const mongoose = require("mongoose");

// to use env variables we need dotenv package
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const cors = require("cors");
app.use(cors());
const userRoute = require("./routes/userRoute")

app.use(express.json());

mongoose.connect(process.env.URI).then(()=>{
console.log("Database connected successfully");
app.listen(process.env.PORT || 8000,(err)=>{
if(err){console.log(err)}
console.log(`server is running at ${process.env.PORT}` )
})
}).catch( (err) => {
console.log("error occured",err);
})


// app.use("/api/user",userRoute);
app.use(userRoute);




