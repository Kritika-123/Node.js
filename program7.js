//timeout
function countDown(fromNumber){
    console.log(fromNumber);
let nextNumber= fromNumber - 1;
if(nextNumber>=0){
    setTimeout(function(){
        countDown(nextNumber);
    },1000);
}
else{
    setTimeout(function(){
        console.log('stop');
    },1000);
}
}
countDown(5);






//work on chrome prompt compiler

// let number = prompt("table of : ");
//   function countDown(fromNumber) {
//     console.log(number + ' x ' + fromNumber + ' = ' + (number * fromNumber));
//     let nextNumber = fromNumber + 1;
//     if (nextNumber <= 10 && nextNumber >= 1) {
//       setTimeout(function () {
//         countDown(nextNumber);
//       }, 1000);
//     } else {
//       setTimeout(function () {
//         console.log('End');
//       }, 1000);
//     }
//   }
//   countDown(1);
