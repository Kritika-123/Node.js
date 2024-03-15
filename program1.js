// let x;
// const y=9;
//  var z;
// // x=9; it can work
// // let x=9; let is not used beacuse let is redeclaring the var x again.
// {
//     let x=9;
//     console.log("Iam x inside a block and my value is:",x)
// }
// {
// const y=10;
// console.log("Iam y inside a block and my value is:",y)
// }
// var z=100;
// console.log("Iam z not inside a block and my value is:",z) // if we change the alue of z in line 3 the value will also remain 100



// new code
a(20);
let x;
const y=9;
var z=70;
// {
//     functiona(b)
// }
{
    {
        let x=9;
        console.log("Iam x inside a block and my value is:",x)
    }
    {
        const y=10;
        console.log("Iam y inside a block and my value is:",y)
    }
        var z=90;
}
z='Hello'
console.log("Iam z not  inside a block and my value is:",z)
function a(b)
    {
    console.log("Iam b inside a function a and my value is:",b);
}
console.log("Iam y inside a block and my value is:",y)



//hositing
//console.log(x) output:undefined
// var x=5;
//console.log(x) output:5

//binding (search in chatgpt)
//primitive datatype object array
// non primitive data type int var null


