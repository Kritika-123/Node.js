//function countDown(fromNumber){
 //   console.log(fromNumber);
    //let nextno = fromNumber-1;
   // if(nextno>0){
      //  countDown(nextno);
    //}
//}
//countDown(3);


//setTimeout(a,5000);
//function a()
//{
  //  console.log(("I last 5 sec"))
//}
//setImmediate(b);
//function b()
//{
  //  console.log(("I immediately"))
//}


function welcome(){
    console.log("welcome to timer code set time out");
        
    }
function welcome1(){
    console.log("i am set ininterval");
}
function welcome2(){
    console.log("i am set immediate");
}
var a1=setTimeout(welcome,5000);
var a2=setInterval(welcome1,2000);
var a3=setImmediate(welcome2);
//clearTimeout(a1);
clearInterval(a2);

