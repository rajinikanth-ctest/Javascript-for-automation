//callback functions
//async call/task -> once this task is completed -> then only callback function is called.

//basic callback function demo - whithout async

function greet(name,callback){
    console.log("hello "+name);
    callback();
}

function welcome(){
    console.log("welcome!");
}

greet("Rajesh",welcome);


//1.basic callback function - with async

function printInfo(name,callback){
    //async function
    setTimeout(function(){
        console.log("Hello "+name);
        callback("plz call me back....");
    },3000);
    // callback("plz call me back...");
}

//callback
function displayMessage(msg){
    console.log(msg);
}

printInfo("Lisa",displayMessage);



//2. basic callback function - with async

function fetchUserData(userId,callback){
    setTimeout(function(){
         const users = {
        1: {id:1, name:"Rajesh"},
        2: {id:2,name:"Riya"}
    };

    const user = users[userId];
    if(user){
        callback(null,user);
    }else{
        callback("user not found",null);
    }
    },6000);
}

function handleUserData(error,user){
    if(error){
        console.error("Error: ",error);
    }else{
        console.log("user: ",user);
    }
}

fetchUserData(1,handleUserData);    //user:  { id: 1, name: 'Rajesh' }
fetchUserData(10,handleUserData);   //Error:  user not found
