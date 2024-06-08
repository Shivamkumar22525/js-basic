class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
    static createId(){
        return 123;
    }
}

const shivam = new user("Rashi");
// console.log(shivam.createId());

class Teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}
const redmi = new Teacher("redmi", "redmi@gmail.com");
redmi.logMe();