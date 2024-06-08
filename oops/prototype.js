let myname = "shivam     ";
let anotherName = "manish      ";

console.log(myname.length);

Object.prototype.truelength = function(){
    console.log(`${this.trim().length}`);
}
anotherName.truelength();
const myObj = {
    username : "shivam",
    userMail : "Shivam@gmail.com"
}
Object.prototype.actualLength = function(){
    console.log(`hey this is shivam and actual length is :${this.trim().length} `);
}
myname.actualLength();
String.prototype.print = function(){
    console.log(`hey this is shivm`);
}

// myname.print();