//countdown
// function countDown(fromNumber){
//     console.log(fromNumber);
//     let intervalId = setInterval(function(){
//         fromNumber--;
//         if(fromNumber > 0){
//             console.log(fromNumber);
//         }else{
//             console.log('END');
//             clearInterval(intervalId);
//         }
//     },1000);
// }
// countDown(3);

function countdown(fromNumber){
    console.log(fromNumber);
    let a=setInterval(function(){
        
        fromNumber--
        if(fromNumber>0){
            console.log(fromNumber);
        }
        else{
console.log('end');
clearInterval(a);
        }
    },1000)
}
countdown(3);