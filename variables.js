// var -> global scope, can be redeclared and modified

console.log("----var----");
var a = 10;
console.log(a);

function test(){
    var a=20;
    console.log(a);
}

{
    var p=1;
}

a = 30;
console.log(a);
test();
console.log(p);

// let -> local scope, cannot redeclare, can be modified
console.log("----let----");

let b = 40;
//let b = 50; //cannot declare again
b = 20; //can be modified
console.log(b);

function test02(){
    let b=9;
    console.log(b);
}

{
    let q=2;
    console.log(q);
}

b=8;
test02();
console.log(b);
//console.log(q); //cannot access out of scope

//const -> local scope, should be initialized, cannot be modified
console.log("-----const----");

const x = 100;
console.log(x);

{
    const y = 200;
    console.log(y);
}

// console.log(y); //cannot be accessed
