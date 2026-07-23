//------------------GET REQUEST----------------------------

let getObject = async (id) =>{

    console.log("---GET REQUEST---");
    await fetch("https://api.restful-api.dev/objects/"+id)
            .then(response=>{
                console.log(response.status,response.statusText);
                return response.json();
            })
            .then(data=>console.log(data))
            .catch(error=>console.log(error));
}

// getObject("ff8081819f7e10ae019f8d71fea817dc");     //retrives the available object

/*
200 OK
{
    "id": "ff8081819f7e10ae019f8d994efb1814",
    "name": "Apple Dell Inspirion 16",
    "data": {
        "year": 2026,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
    }
}
*/

//------------------POST REQUEST----------------------------

let options = {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        "name": "Apple Dell Inspirion 16",
        "data": {
            "year": 2026,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
            }
        })
    }

let addObject = async () =>{

    console.log("---POST REQUEST---");
    await fetch("https://api.restful-api.dev/objects",options)
                .then(response=>{
                    console.log(response.status,response.statusText);
                    return response.json()
                })
                .then(data=>console.log(data))
                .catch(error=>console.log(error));
}

// addObject();         //creates a new object

/*
---POST REQUEST---
200 OK
{
  id: 'ff8081819f7e10ae019f8d71fea817dc',
  name: 'Apple Dell Inspirion 16',
  updatedAt: 1784785010047,
  data: {
    year: 2026,
    price: 1849.99,
    'CPU model': 'Intel Core i9',
    'Hard disk size': '1 TB'
  }
}
*/


//------------------PUT REQUEST----------------------------

let putOptions = {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        "name": "Dell Inspirion 16",
        "data": {
            "year": 2026,
            "price": 2000,
            "CPU model": "Intel Core i7",
            "Hard disk size": "1 TB"
            }
        })
    }


let updateObject = async (id) =>{
    console.log("---PUT REQUEST---");
    await fetch("https://api.restful-api.dev/objects/"+id,putOptions)
            .then(response=>{
                console.log(response.status,response.statusText);
                return response.json();
            })
            .then(data=>console.log(data))
            .catch(error=>console.log(error));
}

// updateObject("ff8081819f7e10ae019f8d71fea817dc");    //updates the existing object

/*
---PUT REQUEST---
200 OK
{
  id: 'ff8081819f7e10ae019f8d71fea817dc',
  name: 'Dell Inspirion 16',
  updatedAt: 1784785010047,
  data: {
    year: 2026,
    price: 2000,
    'CPU model': 'Intel Core i7',
    'Hard disk size': '1 TB'
  }
}
*/


//------------------PATCH REQUEST----------------------------

let patchOptions = {
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        "name": "Macbook Pro M2 2026",
        "data": {
            "year":2025,
            "price":2000,
            "CPU model": "Intel Core i8",
            "Hard disk size": "500 GB"
            }
        })
    }

let partlyUpdateObject = async (id) =>{
    console.log("---PATCH REQUEST---");
    await fetch("https://api.restful-api.dev/objects/"+id,patchOptions)
                .then(response=>{
                    console.log(response.status,response.statusText);
                    return response.json();
                })
                .then(data=>console.log(data))
                .catch(error=>console.log(error));
}

// partlyUpdateObject("ff8081819f7e10ae019f8d71fea817dc");   //updates the existing object partially

/*
---PATCH REQUEST---
200 OK
{
  id: 'ff8081819f7e10ae019f8d71fea817dc',
  name: 'Macbook Pro M2 2026',
  updatedAt: 1784785705084,
  data: {
    year: 2025,
    price: 2000,
    'CPU model': 'Intel Core i8',
    'Hard disk size': '500 GB'
  }
}
*/

//------------------DELETE REQUEST----------------------------

let deleteOptions = {
    method:"DELETE",
    headers:{"Content-Type":"application/json"}
}


let deleteObject = async (id) =>{
    console.log("---DELETE REQUEST---");
    await fetch("https://api.restful-api.dev/objects/"+id,deleteOptions)
                .then(response=>{
                    console.log(response.status,response.statusText);
                    return response.json();
                })
                .then(data=>console.log(data))
                .catch(error=>console.log(error));
}

// deleteObject("ff8081819f7e10ae019f8d71fea817dc");         //deletes the available object permanently

/*
---DELETE REQUEST---
200 OK
{
  message: 'Object with id = ff8081819f7e10ae019f8d71fea817dc has been deleted.'
}
*/


/*
---GET REQUEST---
404 Not Found
{
  error: 'Object with id=ff8081819f7e10ae019f8d71fea817dc was not found.'
}
*/