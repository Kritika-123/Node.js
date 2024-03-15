// const buf3=Buffer.from('Abcdefgah','ascii'); //2nd code
// console.log(buf3.includes(98));
// console.log(buf3.includes(61,'utf8'));

// const buf= Buffer.alloc(5,'alloc');
// console.log( buf);
//console.log(buf.fill('hello',3,4));

// const buf=Buffer.alloc(8); //first code
// console.log(buf);
// console.log(buf.fill('hello',3,8));

// const buf1 = Buffer.from('This is Node.js class');
// const buf2 = Buffer.from('54686973206973204e6f64652e6a7320636c617373','hex');
// console.log(buf1.toString('hex',5,15));
// console.log(buf2.toString('utf8',5,10));

buf=new Buffer.alloc(50); //write
n=buf.write('This is Nodejs class ');
console.log('The number of octets are:'+n);

// var buf1 = Buffer.from('wow');//concatenate
// var buf2= Buffer.from('hello');
// var buf3 = Buffer.concat([buf1,buf2],5);
// console.log("The contents are " + buf3.toString());

// var buffer1 = Buffer.from('ABCD');
// var buffer2 = Buffer.from('ABcD');
// var result = buffer1.compare(buffer2);
// if(result === 0)
// {
// console.log(buffer1+"is equal to "+ buffer2);
// }
// else
// {
// console.log(buffer1+"is not equal to"+ buffer2);
// }

// var buffer1 = Buffer.from('This is Nodejs');
// var buffer2 = Buffer.alloc(10);
// buffer1.copy(buffer2,4,4,10);
// console.log("buffer2 content: " + buffer2.toString());