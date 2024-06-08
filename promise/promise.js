// const createPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task");
//         resolve();
//     },1000);
// });
// createPromise.then(function(){
//     console.log("Task completed")
// });





// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//         reject();
//     },1000);
// }).then(function(){
//     console.log("Task 2 completed");
// });





// const createPromise2 = new Promise(function(resolve,reject){
//     let error = false;
//     if(!error){
//         setTimeout(function(){
//             resolve({username:"shivam",userid:"shivam22525@gmail.com"});
//         },1000)
//     }else{
//         reject("ERROR!!! Something went wrong");
//     }    
// });
// createPromise2.then(function(user){
//     console.log(user);
// }).catch(function(error){
//     console.log(error);
// });






// const createPromise3 = new Promise(function(resolve,reject){
//     let error = false;
//     if(!error){
//         setTimeout(function(){
//             resolve({username:"shivam", userid:"23MCA20340"},1000)
//         })
//     }else{
//         reject("ERROR!!! Something went wrong");
//     }
// })

// createPromise3.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("Either resolve or reject");
// })







const createPromise4 = new Promise(function(resolve,reject){
    let error = false;
    if(!error){
        setTimeout(function(){
            resolve({username:"shivam", userid:"23MCA20340"},1000)
        })
    }else{
        reject("ERROR!!! Something went wrong");
    }
});

async function consumecreatePromise4(){
    try {
        const response = await createPromise4;
        console.log(response);
    } catch (error) {
        console.log(error);        
    }
}
consumecreatePromise4();

// async function getAllUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Either data or error executed");
})