//condition statement
// var x=3;
// while(x<5)
// {
//     console.log(x);
//   // break;
//     x++;
// // continue;
// }
// //x=4;


// var y=-1;//if we dont give any value then it gives undefined answer
// do{
//     console.log(y); 
//     y++;
// }
// while(y<2);

//set time out
//set time interval
//set immediate

function countDown(fromNumber){
    console.log(fromNumber);
    let nextNumber=fromNumber - 1;
    if (nextNumber>0){
        countDown(nextNumber);
    }
}
 countDown(3); 


 