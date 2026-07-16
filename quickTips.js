//1. find unique values from the array using spread operator

const arr = [20,13,22,43,21,20,13,43];

const uniqueArray = [...new Set(arr)];

console.log("uniqueArray: "+uniqueArray);

//2. int to string
let num = 23;

console.log("typeof "+num+":"+(typeof num))  //number

let numStr = num+"";   //using concatenation to convert number to string

console.log("typeof "+numStr+":"+(typeof numStr)); //string

//3. float to int

const x = 22.94;
console.log("x:"+x);

const numX = parseInt(x);
console.log("numx:"+numX);

//4. check if variable is a number

const value = '240';

if((typeof value)==='number' && !isNaN(value)){
    console.log(value+" is a number");              //240 is not a number
}else{
    console.log(value+" is not a number");
}

//5. swap variable values

let a = 20;
let b = 30;

console.log("a:"+a);            //before swapping
console.log("b:"+b);

[a,b] = [b,a];  //swapping variables

console.log("a:"+a);            //after swapping
console.log("b:"+b);

//6. check if an object has a property

const person = {
    name:"Rajesh",
    age:33
}

if(person.hasOwnProperty("name")){
    console.log("person has property...");
}

//7. remove falsy values from array

const values = [0,1,2,false,'',3,null,undefined,NaN,4];
const newValues = values.filter(Boolean);

console.log("new values:"+newValues);   //1,2,3,4

//8. String -> uppercase, lowercase

const str = "JAVASCRIPT FOR PLAYWRIGHT";

const l1 = str.toLowerCase();
console.log(l1);  // javascript for playwright

const u1 = l1.toUpperCase();
console.log(u1);    //JAVASCRIPT FOR PLAYWRIGHT

//9. check if array contains a value

const language = ["java","python","javascript","ruby"];

if(language.includes("javascript")){
    console.log("found");
}

//10. check if array is empty

const empty = [];

if(empty.length===0){
    console.log("Array is empty...");
}

//11. generate a random number
const randomNumber = Math.floor((Math.random()*10)+1);  //prints a number from 1 to 10

console.log("randomNumber:"+randomNumber);

//12. string to number

const strNumber = "100.22";
console.log("typeof strNumber: "+(typeof strNumber));

// const x1 = parseInt(strNumber);
const x1 = parseFloat(strNumber);

console.log("typeof x1: "+" "+(typeof x1));

//13. join array elements into a string

const words = ["hello","we","are","learning","javascript"];

const sentence = words.join(" "); 

console.log(sentence);

// 14. get object property

const user = {
    name:"Rajesh",
    age:33,
    dob:"31-10-1992"
};

console.log(user['name']);
console.log(user['age']);
console.log(user['dob']);

//15. clone an array or object

const marks = [20,30,10,44,90];
const duplicateMarks = [...marks];

console.log(duplicateMarks);

const duplicateUser = {...user};
console.log(duplicateUser);

//16. object to arrays

const employee = {
    name:"Rajesh",
    age:33,
    dob:"31-10-1992"
};

const keysArray = Object.keys(employee);  //extracting keys of an object into an array

console.log(keysArray);         //[ 'name', 'age', 'dob' ]

const valuesArray = Object.values(employee);  //extracting values of an object into an array

console.log(valuesArray);       //[ 'Rajesh', 33, '31-10-1992' ]

const keyValueArray = Object.entries(employee);   //extracting key-value pairs of an object into an array

console.log(keyValueArray);         //[ [ 'name', 'Rajesh' ], [ 'age', 33 ], [ 'dob', '31-10-1992' ] ]


//17. get current date and time

const currentDate = new Date();

console.log(currentDate.toLocaleDateString()); //prints current date

console.log(currentDate.getTime());   //prints time in milliseconds

//18. check the variable is defined

let i;

if(typeof i==='undefined'){
    console.log("undefined")
}

//19. truncate an array

const testing = [1,2,3,4,5,6,7,8,9,10];

console.log(testing);   //[1,2,3,4,5,6,7,8,9,10]

testing.length=5;       //restricting the length to truncate an array

console.log(testing);   //[ 1, 2, 3, 4, 5 ]

//20. last item in a array

const pop = [1,2,3,5,6,8];

const n1 = pop.slice(-1);    // [ 8 ]

console.log(n1);
