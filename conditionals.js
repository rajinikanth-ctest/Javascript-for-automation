//if-else condition
// program to check eligibility to vote

let age = 18;

if(age>=18){
    // console.log("you are elligible to vote");
}
else{
    // console.log("you are not elligible to vote");
}

// program to check a number is even or odd

function checkNumber(num){
    if(num%2==0){
        console.log(num+" is an even number");
    }
    else{
        console.log(num+" is an odd number");
    }
}

// checkNumber(23);

//nested if-else condition
// program to check the grade

function checkGrade(score){
    if(score>=90){
        console.log("Grade:A");
    }
    else if(score>60){
        console.log("Grade:B");
    }
    else if(score>40){
        console.log("Grade:C");
    }
    else{
        console.log("Failed");
    }
}

// checkGrade(97);
// checkGrade(86);
// checkGrade(60);
// checkGrade(32);

// program to launch browser

function launchBrowser(browser){
    if(browser=="chrome"){
        console.log("launching chrome browser");
    }
    else if(browser=="firefox"){
        console.log("launching firefox browser");
    }
    else if(browser=="edge"){
        console.log("launching edge browser");
    }
    else{
        console.log("please pass a valid browser...");
    }
}

launchBrowser("firefox");
launchBrowser("chrome");
