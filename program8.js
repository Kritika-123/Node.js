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

