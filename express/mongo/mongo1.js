const express=require("express");
const mongoose=require("mongoose");
const app=express();
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("database connected");
})
.catch(()=>{
    console.log("not connected");
})
app.listen(3000,()=>{
    console.log("listing to port 3000");
})