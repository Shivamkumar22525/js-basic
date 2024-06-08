// const user = {
//     username: "shivam",
//     loginCount: 8,
//     isLoggedIn: true,

//     getUserDetails:function(){
//         // console.log(`${this.username}`);
//         console.log(this);
//     }
    
// }
// console.log(user.username)
// console.log(user.getUserDetails());

const user2 = function(username, usercount, isLoggedIn){
    this.username = username;
    this.userNumber = usercount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const oneUser = new user2("manish", 11,false);
const twoUser = new user2("krish",7,true);
console.log(oneUser.constructor);