fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log("Data from API:");
    console.log(data);
})
.catch(error=>{
    console.log("Error:",error)
});