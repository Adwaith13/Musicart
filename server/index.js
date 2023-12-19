const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const auth = require("./routes/auth")

/* 1]product head
2]product name
3]product price
4]product color and type
5]product description
6]available / not -stock
7]brand */

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Database Connection Successful');
}).catch((error)=>{
    console.log(error);
})

app.get("/",(req,res)=>{
    res.status(200).json({
        status:'Success',
        message:'Server is working',
    })
})

app.use("/",auth);

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})
