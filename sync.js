// synchronization example

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("three");
},3000);

console.log("four");

// callbacks

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);

// callback hell

calculator(1,2,(a,b)=>{         //first example
    console.log(a+b);
    calculator(3,4,(a,b)=>{
        console.log(a+b);
        calculator(5,6,(a,b)=>{
            console.log(a+b);
            calculator(7,8,sum);
        });
    });
});

function getData(a,getNextData){        //second example
    setTimeout(()=>{
        console.log(a);
        if(getNextData){
            getNextData();
        }
    },3000);
}

getData(1,()=>{                             
    console.log("getting data 2...");
    getData(2,()=>{
        console.log("getting data 3...");
        getData(3,()=>{
            console.log("getting data 4...");
            getData(4);
        });
    });
});