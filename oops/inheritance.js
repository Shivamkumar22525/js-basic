class user{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.pass = password;
    }
    course(){
        console.log(`Teacher added course`)
    }
}

const newTeacher = new Teacher("Rashi", "rashi@gmail.com", 123);
console.log(newTeacher)
newTeacher.course();

const anotherTeacher = new user("shivam");
anotherTeacher.logMe();
// anotherTeacher.course();
console.log(newTeacher instanceof Teacher);
