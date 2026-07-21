let data = '{"id": 123,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz",'+
'"address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874"}'+'}'

let obj = JSON.parse(data);

console.log(obj.id+" "+obj.username); //123 Bret

console.log(obj.address.street)   //Kulas Light
console.log(obj.address.city)   //Gwenborough



let petData = '{"id": 10,"name":"doggie","category":{"id": 1,"name":"Dogs"},'+
'"tags":[{"id":10,"name":"rock"},{"id":12,"name":"sandy"}],"status":"available"}';

let petObj = JSON.parse(petData);

console.log(petObj.tags[0].id);  //10
console.log(petObj.tags[0].name);  //rock
console.log(petObj.tags[1].id);  //12
console.log(petObj.tags[1].name);  //sandy

