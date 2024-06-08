const User = {
    _email: "rashi@gmail.com",
    _pass: "shivam123",

    get email(){
        return `${this._email.toUpperCase()}`
    },
    set email(value){
        this._email = value;
    }
}
const newUser = Object.create(User);
console.log(newUser.email);