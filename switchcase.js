// program to check day

function checkDay(num){
    switch(num){
        case 0: console.log("Sunday");
        break;
        case 1: console.log("Monday");
        break;
        case 2: colsole.log("Tuesday");
        break;
        case 3: console.log("Wednesday");
        break;
        case 4: console.log("Thursday");
        break;
        case 5: console.log("Friday");
        break;
        case 6: console.log("Saturday");
        break;
        default : console.log("invalid day");
    }
}

checkDay(3); //wednesday
checkDay(6); //saturday
checkDay(1); //monday
checkDay(7); //invalid day

// program to launch browser using switchcase

function launchBrowser(browser){
    switch(browser){
        case "chrome": console.log("launching chrome browser");
        break;
        case "edge": console.log("launching edge browser");
        break;
        case "firefox": console.log("launching firefox browser");
        break;
        default : console.log("please pass a valid browser...");
    }
}

launchBrowser("firefox"); //launching firefox browser
launchBrowser("chrome"); //launching chrome browser
launchBrowser("edge"); //launching edge browser
launchBrowser("safari"); //please pass a valid browser...