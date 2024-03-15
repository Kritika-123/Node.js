// //deflate
// const zlib1=require('zlib');
// const i="hello bitches";
// zlib1.deflate(i,(err,buffer)=>{
//     if(!err){
//         console.log('compressed data: ',buffer.toString('base64'));
//     }
// });

// //inflate
// const z=require('zlib');
// const c=Buffer.from('eJzLSM3JyVdIyixJzkgtBgAjPQUX','base64');
// z.inflate(c,(err,Buffer)=>{
//     console.log(Buffer.toString());
// });


const zlib=require('zlib');
const gzip=zlib.createGzip();
const fs=require('fs');
const inp=fs.createReadStream('Input.txt');
const out=fs.createWriteStream("New1.txt.gz");
inp.pipe(gzip).pipe(out)
console.log("File compressed");