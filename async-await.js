// program to demonstrate synchronization with async-await

function checkEven(num){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num%2==0)
                resolve("the number resolved being even:"+num);
            else
                reject(new Error("the number rejected being odd:"+num));    
        },3000);
    })
}

async function test(){          //declaring a function test as async

    await checkEven(2)          
            .then((result)=>{
                console.log(result);
            },(error)=>{
                console.log(error);
            });
    
    await  checkEven(3)             //using await keyword to make the function wait for previuos task
            .then((result)=>{
                console.log(result);
            },(error)=>{
                console.log(error);
            });
    
    await  checkEven(6)
                .then((result)=>{
                    console.log(result);
                },(error)=>{
                    console.log(error);
                });
    await   checkEven(7)
              .then((result)=>{
                console.log(result);
              },(error)=>{
                console.log(error);
              });
}

test();   //calling async function

setTimeout(()=>console.log("end"),15000); //checking termination