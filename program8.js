const readline=require('readline');
const a=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
a.question('Enter a Value:',(userInput)=>{
    const num=parseFloat(userInput);
    if(!isNaN(num)){
        console.log('your value:',(userInput));
    }
    else{
        console.log('Invalid input value');
    }
    a.close();
});

// function table(fromNumber){
//     let num = 0;
//     console.log("table: ");
//     let interval = setInterval(function(){
//     num++;
//     if(num<11){
//     console.log(fromNumber,"*",num,"=",fromNumber*num);
//     }
//     else{
//     console.log('End');
//     clearInterval(interval);
//     }
//     },1000);
//     }
// table(2);

 //  Author: Harshith Varma;
// var h=10;
// function a(){
// console.log(h--)
// let j=setTimeout(a,1000);
// if(h<0){
// console.log("End");
// clearTimeout(j);
// }
// }
// a();