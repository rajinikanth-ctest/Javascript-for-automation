// demonstrating the usage od typeof function

let num = 10;

console.log("type of "+num+": "+typeof(num));  //number

let decimal = 10.23;

console.log("type of "+decimal+": "+typeof(decimal));  //number

let name = "java";

console.log("type of "+name+": "+typeof(name)); //string

let user = {
    name:"Rajesh",
    age:33
}

console.log("type of user"+": "+typeof(user)); //object

let x = null;
console.log("type of x"+": "+typeof(x)); 

let y;
console.log("type of y"+": "+typeof(y)); //undefined

function print(name){
    console.log(`hello my name is ${name}`);
}

console.log("type of print"+": "+typeof(print));  //function
