function user(username){
    this.username = username;
    console.log("called")
}
// const newUser = new user("shivam")
// console.log(newUser);

function anotherUser(username,email,password){
    user.call(this,username);
    this.email = email;
    this.pass = password;
}
const userDetails = new anotherUser("shivam", "shivam@gmail.com", 123456789);
console.log(userDetails);
