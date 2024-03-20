var express=require('express');
var app=express();
app.get('/get',(req,res)=>
{
    res.sendFile(__dirname+"/"+"a.html")
})
app.get('/formload',(req,res)=>
{
    res.sendFile(__dirname+"/"+"formnew.html")
})
app.listen(2000);