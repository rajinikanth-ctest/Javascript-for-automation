// program to demonstrate synchronisation with promise chaining

function checkEven(num){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num%2==0)
                resolve("the number resolved being even:"+num);
            else
                reject("the number rejected being odd:"+num);    
        },3000);
    })
}


checkEven(2)            //first function call

    .then((result)=>{
        console.log("first call result:"+result);

        return checkEven(6);   //second function call returning promise

    },(error)=>{
        console.log("first call error:"+error);
    })
    .then((result)=>{
        console.log("second call result:"+result);

        return checkEven(5);   //third function call returning promise

    },(error)=>{
        console.log("second call error:"+error);
    })
    .then((result)=>{
        console.log("third call result:"+result);

        return checkEven(6);  //fourth function call returning promise

    },(error)=>{
        console.log("third call error:"+error);

        return checkEven(6);    //fourth function call returning promise
    })
    .then((result)=>{
        console.log("fourth call result:"+result);

    },(error)=>{
        console.log("fourth call error:"+error);
    })
    .catch((error)=>{
        console.log(error);
    })

setTimeout(() => {
    console.log("end");
}, 15000);