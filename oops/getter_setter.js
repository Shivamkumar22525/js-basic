class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password.toUpperCase()}shivam`;
    }
    set password(value){
        this._password = value;
    }
}
const newUser = new User("shivam@gmail","123abc" );
console.log(newUser.password);
console.log(newUser.email);
