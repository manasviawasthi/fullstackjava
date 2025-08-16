function checkAge(age){
    return new Promise((resolve,reject)=>{
        if(age>=18){
            resolve("Access granted.You are old enough");
        }
        else{
            reject("Access denied.You are underage");
        }
    });
}
const userAge=15;
checkAge(userAge)
    .then(message=>{
        console.log("Success:",message);
    })
    .catch(error=>{
        console.log("Error:",error);
    })
