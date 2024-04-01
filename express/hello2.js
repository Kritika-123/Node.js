// var express=require('express');
// var app=express();
// app.get('/get',(req,res)=>
// {
//     res.sendFile(__dirname+"/"+"a.html")
// });
// app.get('/formload',(req,res)=>
// {
//     res.sendFile(__dirname+"/"+"formnew.html")
// });
// app.get('/submit',(req,res)=>
// {
//     response={
// name:req.query.name,
// age:req.query.age
//     }
//     res.send(JSON.stringify(response));
// });
// app.listen(2000);


var express=require('express');
var app=express();
app.get('/get',(req,res)=>
{
    res.sendFile(__dirname+"/"+"a.html")
});
app.get('/formload',(req,res)=>
{
    res.sendFile(__dirname+"/"+"formnew.html")
});
app.get('/submit',(req,res)=>
{
    response={
name:req.query.name,
age:req.query.age
    }
   res.write('<table border="2">');
   res.write('<tr><th>Name</th><th>Age</th><tr>');
   res.write('<tr>');
});
app.listen(2000);

