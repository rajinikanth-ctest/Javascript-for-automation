// Date class in javascript

let date = new Date();

console.log("date and time: ",date);  //format -> 2026-07-22T06:22:13.586Z

console.log("date and time: "+date);  //format -> Wed Jul 22 2026 11:54:06 GMT+0530 (India Standard Time)

console.log("local date and time: "+date.toLocaleString());  //format -> 22/7/2026, 12:00:08 pm

console.log("day of month: "+date.getDate());  //returns day of month

console.log("current month: "+date.getMonth());  //returns current month 0-11

console.log("current year: "+date.getFullYear());   //returns current year

console.log("current hour of the day : "+date.getHours()); //returns current hours in local time

console.log("current minute of the hour: "+date.getMinutes()); //returns current minute of the hour in local time

console.log("current second of the minute: "+date.getSeconds()); //returns current second of the minute in local time

console.log("current mllisecond of the minute: "+date.getMilliseconds()); //returns current millisecond of the minute in local time

console.log("current millisecond scince unix epoch: "+date.getTime()); //returns the time in milliseconds from jan 1 1970