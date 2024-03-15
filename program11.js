//file
//read  Asynchronus mode
// var fs=require("fs");
// fs.readFile('Input.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Asynchronus read:" + data.toString()); 
// });

//read Synchronus mode 
// var http=require('http');
// var fs=require('fs');
// http.createServer(function(req,res){
//     console.log("File is about to read");
//     fs.readFile('Input.txt',function(err,data){
//         res.write(data);
//         return res.end();
//     });
// }).listen(5000);

//write
var fs=require('fs');
fs.open('file.html','w',function(err,file){
    if(err)throw err;
    console.log('saved!');
});

//append
var fs=require("fs");
fs.appendFile('input.txt','adding new content using appendfile method',function(err){
    if(err){
        throw err;
        }
    console.log("file updated succesfully");
});