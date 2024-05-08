// x=10;
// y=10.0;//'10.0'//'10a'
// console.log(typeof(x))
// console.log(typeof(y))
// if(x==y)//(x===y)
// {
//     console.log('True')
// }
// else{
//     console.log('False')
// }
const fs = require('fs');

// Asynchronous file reading
fs.readFile('new.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Asynchronous file content:', data);
});

// Synchronous file reading
const dataSync = fs.readFileSync('new1.txt','utf8');
console.log('Synchronous file content:', dataSync);