//regular expressions in javascript -> used for pattern matching in strings

/*
important conventions:
 . -> any character
 * -> zero or more
 + -> one or more
 ? -> 0 or 1
 \w -> word
 \d -> digit
 \s -> whitespace
 \W -> not word
 \D -> not digit
 \S -> not whitespace
 [abc] -> any of a,b,c
 [^abc] -> not a,b or c
 [a-g] ->  char between a to g
 ^ -> start swith
 $ -> ends with
 {} -> length of occuurances
 () -> group

 i -> case insensitive flag
 g -> global flag - finds all occurances
 
 */


 //1. remove the non digit characters from string
 let price = "RS.9,999/-";

 let re = new RegExp(/[^0-9]/g);
 let num = price.replaceAll(re,'');

 console.log(price+": "+num);  //9999


 //2. check the format of an Indian mobile number

 let mobile = "+918797953212";

 re = new RegExp(/^(\+91)?\s?[8796][0-9]{9}$/);

 console.log(mobile+" :"+re.test(mobile));  //true

 //+91 8797953212  -> true
 //8797953212      -> true



 //3. check the format of an email id

 let email = "priya9999@yahoo.com";

 re = new RegExp(/^[a-zA-Z]+[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/);

 console.log(email+" :"+re.test(email));   //true

 //123priya9999@yahoo.com  -> false
 //priya9999@yahoo12.com  -> false
 //priya9999@yahoo.com1   -> false
 //priya9999@1yahoo.com  -> false

