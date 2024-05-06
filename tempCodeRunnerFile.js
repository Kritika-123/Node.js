//inflate
const z=require('zlib');
const c=Buffer.from('eJzLSM3JyVdIyixJzkgtBgAjPQUX','base64');
z.inflate(c,(err,Buffer)=>{
    console.log(Buffer.toString());
});