//string functions/methods 

let s1 = "playwright automation";

//1.length -> returns legth of a string

console.log("length of s1: "+s1.length);

//2. indexOf -> returns the index of a character for first occurance

console.log("index of i:"+s1.indexOf("i"));

console.log("index of z:"+s1.indexOf("z"));  //returns -1 if the character is not present

console.log("index of 'a' from position 5:"+s1.indexOf('a',5));  //returns index with respect to given character

//3. lastIndexOf -> returns the index of first occurance from right

console.log("lastIndexof a:"+s1.lastIndexOf("a"));

//4. includes -> returns true/false depending on the availibility of a substring or charater

console.log(s1.includes("wri")); //true

console.log(s1.includes("p"));  //true

//5. startsWith -> returns a boolean is the string starts with a specified char

console.log(s1.startsWith("play")); //true

//6. endsWith -> returns a boolean is the string ends with a specified char

console.log(s1.endsWith("tion"));  //true

//7. slice -> returns a part of the string with specified index range

console.log(s1.slice(0,5));  //playw
console.log(s1.slice(5));   //right automation

//can take negative index values
console.log(s1.slice(-10,-5)); //autom

//8. substring -> returns a substring within specified range

console.log(s1.substring(4,10));  //wright
console.log(s1.substring(10,4));  //wright

console.log(s1.substring(11));    //automation 

//9. replace -> replaces a part of string with first occurance

let s = s1.replace("playwright","selenium");  
console.log(s);             //selenium automation

//10. replaceAll -> replaces all the occurances
s = s1.replaceAll("i","r");
console.log(s);             //playwrrght automatron

//11. toLowerCase -> converts string into lowercase

s = s1.toLowerCase();
console.log(s);         //playwright automation

//12. toUpperCase -> converts string into lowercase

s = s1.toUpperCase();
console.log(s)        //PLAYWRIGHT AUTOMATION

//13. trim -> clears the trailing spaces

let p = "  test automation  ";
console.log(p);
console.log("length of p:"+p.length);  //19

p = p.trim();
console.log(p);
console.log("length of p:"+p.length); //15   

//14. split -> converts a string to an array of strings with the given delimiter

console.log(s1.split(" "));  //[ 'playwright', 'automation' ]

//15. concat -> joins/concatenates two strings and returns new string

p = s1.concat(" with javascript");
console.log(p);            //playwright automation with javascript

