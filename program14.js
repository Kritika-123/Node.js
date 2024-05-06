// //deflate
// const zlib1=require('zlib');
// const i="hello bitches";
// zlib1.deflate(i,(err,buffer)=>{
//     if(!err){
//         console.log('compressed data: ',buffer.toString('base64'));
//     }
// });

//inflate
// const z=require('zlib');
// const c=Buffer.from('eJzLSM3JyVdIyixJzkgtBgAjPQUX','base64');
// z.inflate(c,(err,Buffer)=>{
//     console.log(Buffer.toString());
// });


// const zlib=require('zlib');
// const gzip=zlib.createGzip();
// const fs=require('fs');
// const inp=fs.createReadStream('new.txt');
// const out=fs.createWriteStream("new.txt.gz");
// inp.pipe(gzip).pipe(out)
// console.log("File compressed");


// decompress

// const zlib=require('zlib');
// const Unzip=zlib.createUnzip();
// const fs=require('fs');
// const inp=fs.createReadStream("new.txt.gz");
// const out=fs.createWriteStream('new1.txt');
// inp.pipe(Unzip).pipe(out);
// console.log("File decompressed");

// var http = require('http');
// var server = http.createServer(function (req, res) {
//     if (req.url == '/') {
//         res.end('Welcome to Index page');
//     }
//     else if (req.url == "/emp") {
//         res.end('Welcome to Employees page');
//     }
//     else
//     {
//         res.end("invalid request of the user");
//     }
// });
// server.listen(1000);
// console.log('Server is running at port 1000')
