// //array literal
// // const courses=['javascript','Node js','React js'];
// // console.log(courses);
// // console.log(courses[3]);
// // const[a,b]=courses;
// // console.log(a);
// // console.log(b);
// // const num=[1,2,3,4,5,6,7];
// // const[x,...y]=num;
// // console.log(x);
// // console.log(y);


// //insert element
// const subjects=Array('javascript','node js','react js');
// console.log(subjects);
// console.log(subjects.length);
// subjects[3]='Angular js';
// console.log(subjects);

// //concatination or spread opreator
// var num1=[11,12,13];
// var num2=[14,15,16];
// var num3=[17,18,19];
// console.log(num2.concat(num1,num3));
// console.log(num2.concat(num3));
// console.log(num2+num3);

// //every
// var numbers=[6,4,8,2,7];
// var even=numbers.every(function(x){//strict version for checking. give boolean value.
//     return x%2==0;
// });
// console.log(even);

// //filter
// var numbers=[6,4,8,2,7];
// var even=numbers.filter(function(x){//return which satisfy condition
//     return x%2==0;
// });
// console.log(even);


// //fetching
// var array_1=[2,3,4,5,6];
// array_1.forEach(function(num,i){
//     array_1[i] **=2
// });
// console.log(array_1);


// //some
// var numbers=[6,4,8,2,7];
// var even=numbers.some(function(x){//atleast one element should satisfy the condition
//     return x%2==0;
// });
// console.log(even);

// //push
// var items=['david','john','Reeta'];
// console.log(items.push('Ibrahim'));//number of elemenets
// console.log(items);


// //pop
// var items=['david','john','Reeta'];
// console.log(items.pop());// elements that is deleted;
// console.log(items);


// //sort
// var items=[100,-20,-30,9.3,50];
// console.log(items.sort());

// //sort in right way
// var arr=[100,-20,-30,9.3,50];
// console.log(arr.sort(function(a,b){
//     return a-b;
// }));

// //slice
var items=['david','john','Reeta','Anuj','Michale'];
console.log(items.slice(0,3));
console.log(items);

//splice
var items=['david','john','Reeta','Anuj','Michale'];
console.log(items.splice(0,3));//take 3,4 argument
console.log(items);


//splice
var items=['david','john','Reeta','Anuj','Michale'];
console.log(items.splice(1,3,'Hello  i am in'));//take 3,4 argument
console.log(items);


// //find
// var numbers=[3,4,8,2,7];
// var even=numbers.find(function(x){//return first element which satisfy the condition
//     return x%2==0;
// });
// console.log(even);

// //reverse
// var items=['david','john','Reeta','Anuj','Michale'];
// console.log(items.reverse());

// //shift
// var items=['david','john','Reeta','Anuj','Michale'];
// console.log(items.shift());
// console.log(items);


// //find
// var numbers=[3,4,8,2,7];
// var even=numbers.find(function(x){//return first element which satisfy the condition
//     return x%2==0;
// });
// console.log(even);

// //reverse
// var items=['david','john','Reeta','Anuj','Michale'];
// console.log(items.reverse());

// //join
// var items=['david','john','Reeta','Anuj','Michale'];
// console.log(items.join(" , "));


// //enteries
// var numbers=[1,2,3];
// var val=numbers.entries();
// console.log(val.next().value);
// console.log(val.next().value);
// console.log(val.next().value);


// // console.log(Array.from["hello"].keys);