// method overloading in javascript

function print(){
    console.log("hello there!");
}

function print(name){
    console.log(`hello ${name}!`);
}

function print(name,age){
    console.log(`hello ${name} your age is ${age}`);
}

print();   //hello undefined your age is undefined

print("Rajesh"); //hello Rajesh your age is undefined

print("Rajesh",33);  //hello Rajesh your age is 33

//hence we can conclude method overloading is not possible in javascript

//program to implement method overloading

function displayBrowserInfo(browserName,browserVersion,remoteExecution){

    if(typeof browserVersion==="number" && typeof remoteExecution==="boolean"){
        console.log(`Browser:${browserName} Version:${browserVersion} remoteExec:${remoteExecution}`);
    }else
    if(typeof browserVersion==="number"){
        console.log(`Browser:${browserName} Version:${browserVersion}`);
    }else{
        console.log(`Browser:${browserName}`);
    }
}

displayBrowserInfo("chrome"); //Browser:chrome

displayBrowserInfo("firefox",121);  //Browser:firefox Version:121

displayBrowserInfo("edge",123.2,true);  //Browser:edge Version:123.2 remoteExec:true