var express = require('express');
var app = express();
const {hello,welcome} = require("./middle");
app.use(hello);
app.get("/",hello,welcome,(req,res)=>{
res.send('Printing: hello'+'<br/>'+'Printing: welcome')});
app.listen(3000, function (err) {
if (err) console.log(err);
console.log("Server started");
})