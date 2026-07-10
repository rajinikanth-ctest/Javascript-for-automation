//for loop
//program to print 1 to 10 numbers
console.log("------for loop------");
for(let i=0;i<10;i++){
    console.log(i+1);
}
console.log("------for...of loop------");

//for ... of loop -> mainly used for arrays
//program to print numbers in array

const nums = [1,2,3,4,5,6,7,8,9,10];

for(let n of nums){
    console.log(n);
}
console.log("------for loop with index------");

const arr = [3,4,7,5,2];
for(let i=0;i<arr.length;i++){   //accessing elements using index
    console.log(arr[i]);
}

console.log("------while loop------");
//while loop
// program to print 1 to 10 numbers

let p=1; //initializing

while(p<=10){  //comparing
    console.log(p);
    p=p+1;    //incrementing
}

//do-while loop
console.log("------do while loop------");

let q=1;   //initializing

do{
    console.log(q);
    q=q+1;          //incrementing
}while(q<=10);      //comparing

console.log("----------break and continue---------");
//break
//program to print numbers upto 20

let r=1;

while(r<=20){
    if(r%10==0){
        console.log(r);
        break;
    }else{
         console.log(r);
        r=r+1;
    }
}

console.log("-----------------")
//program to select a browser

const browsers = ["chrome","firefox","edge","safari","opera"];

for(let b of browsers){
    console.log(b);
    if(b=="safari"){
        console.log("launched safari browser");
        break;
    }
}

console.log("--------for...in loop------");
//for...in loop with object
// program to print an object using for...in loop

const user ={
    name:"Rajesh",
    age:33,
    city:"Hyderabad"
}

for(let key in user){
    console.log(key+":"+user[key]);
}