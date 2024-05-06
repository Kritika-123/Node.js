//file
// read  Asynchronus mode
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

// //write
// var fs=require('fs');
// fs.open('file.html','w',function(err,file){
//     if(err)throw err;
//     console.log('saved!');
// });

// //append
// var fs=require("fs");
// fs.appendFile('input.txt','adding new content using appendfile method',function(err){
//     if(err){
//         throw err;
//         }
//     console.log("file updated succesfully");
// });


//Synchronus
// var fs=require("fs");
// var data=fs.readFileSync("Input.txt");
// var org=data.toString();
// console.log(org);
// fs.writeFileSync("Input.txt","heeeeeelllllloooo");
// fs.appendFileSync("Input.txt","srry for disturbance");
// fs.renameSync("Input.txt","new.txt");

// aynchronus
// var fs=require("fs");
// // fs.writeFile("fs.txt","hey new file",(err)=>{
// //     console.log("file created");
// //     console.log(err);
// // })
// // fs.appendFile("fs.txt","yes miss",(err)=>{
// //     console.log("data insertde");
// //     console.log(err);
// // })
// fs.readFile("fs.txt",(err,data)=>{
//     console.log(data.toString());
// })

// const os=require("os");
// console.log(os.arch());

//for copy text
// var fs=require("fs");
// fs.readFile("fs.txt",(err,data)=>{
//     if(err){
//         console.log("not read");
//     }
// fs.appendFile("new.txt",data,(err,data)=>
// {
//     console.log(err);
// })
// })