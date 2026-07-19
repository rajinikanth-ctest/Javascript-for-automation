// a promise is a better way than callback to handle asynchronous execution
// 1. program to demonstrate wworking of promise

const promise = new Promise((resolve,reject)=>{     //creating a promise object
    //async operations
    setTimeout(()=>{
        let num = Math.floor(Math.random()*10+1);  //generating a random number between 1 and 10

        if(num>5){
            resolve("promise resolved with:"+num);   //promise resolved making a successful async call
        }else{
            reject("promise rejected with:"+num);    //promise rejected making a unsuccessful async call
        }
    },3000)
});

promise
    .then((msg)=>console.log(msg),
        (error)=>console.log(error))     //then -> handles the resolved and rejected response
    .catch(msg=>console.log(msg));       //catch -> handles only the rejected response or any exception

setTimeout(()=>console.log("end"),8000);  //check for termination


// 2. handling the promise returned by a function 

function checkEven(num){                       //function holding a promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num%2==0)
                resolve("the number resolved being even:"+num);
            else
                reject("the number rejected being odd:"+num);
        },4000);
    })
}

checkEven(2)        //calling the function

    .then((result)=>{               //handling the promise returned
        console.log(result);
    },(error)=>{
        console.log(error);
    })


checkEven(3)                    //calling the function

    .then((result)=>{               //handling the promise returned
        console.log(result);
    },(error)=>{
        console.log(error);
    })


checkEven(4)                    //calling the function

    .then((result)=>{               //handling the promise returned
        console.log(result);
    },(error)=>{
        console.log(error);
    })
