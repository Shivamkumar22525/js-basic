function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return `${this._email.toUpperCase()}`
        },
        set: function(value){
            this._email = value;
        }
    });
    Object.defineProperty(this, "password", {
        get: function(){
            return `${this._password.toUpperCase()}manish`
        },
        set: function(value){
            this._password = value;
        }
    });
}
const newUser = new User("manish@gmail.com", "123abc");
console.log(newUser.email);
console.log(newUser.password);