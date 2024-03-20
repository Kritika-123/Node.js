var express=require('express');
var app=express();
app.get('/get',(req,res)=>
{
    res.sendFile(__dirname+"/"+"a.html")
})
app.listen(2000);