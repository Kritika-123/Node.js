var buffer1 = Buffer.from('This is Nodejs');
var buffer2 = Buffer.alloc(10);
buffer1.copy(buffer2,4,4,10);
console.log("buffer2 content: " + buffer2.toString());