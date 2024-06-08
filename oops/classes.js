class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const newUser = new user("shivam", "shivam@gmail.com", 123);
console.log(newUser);
console.log( newUser.encryptPassword());
console.log(newUser.changeUsername());



function user1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user1.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
user1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const anotherUser = new user1("rashi","rashi@gmail.com","shivam");
console.log(anotherUser)
console.log(anotherUser.encryptPassword());
console.log(anotherUser.changeUsername());

