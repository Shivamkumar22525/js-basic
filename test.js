// const name = "Shivam";
// let standard = 12;
// var rollNo = "112233";
// subject = "maths";
// console.table([name,standard,rollNo,subject]);







// let x = 3;
// console.log(x);
// x++;
// console.log(x);
// let y = x++;
// console.log(y);
// console.log(x);






// let x = 3;
// console.log(x);
// ++x;
// console.log(x);
// let y = ++x;
// console.log(y);






// let val =Boolean("laksj"); //if string is empty as boolean then it gives false
// console.log(typeof val);
// console.log(val);






// console.log(typeof ("3" + 3 + 3)) // if string is use as a prefix it covert followed digit into string 
// console.log(typeof (3 + 3 + "3")) // if string is use in last then the number would be treat as string
// console.log(typeof (3 + "3" + 3)) // when string occur followed number would be in string







// console.log(1 > "2");  //covert string into number datatype
// console.log("3" != 3);






// console.log("2">true);
// console.log(false<"2");
// console.log(true>="2")
// console.log(false=="2");
// console.log(true>2);
// console.log(false<2);
// console.log(false<=2);







// console.log(null>0);
// console.log(null>=0);
// console.log(null<=0);
// console.log(null>true);
// console.log(null<false);
// console.log(null>=false);
// console.log(null>=true);
// console.log(null==2);
// console.log(null=="2");








// console.log(undefined>=0);
// console.log(undefined<=0);
// console.log(false>undefined);
// console.log(undefined>true);
// console.log(undefined>=false)
// console.log(undefined>"2")
// console.log(undefined<"2")
// console.log(undefined=="2")
// console.log(undefined==2)






// let name = "shivam"
// let number = 12
// console.log(`My name is ${name} and my number is ${number}`)







// let name = "shivam";
// console.log(name.indexOf('t'))
// console.log(name[0])
// let anotherName = new String('Rashi')
// console.log(anotherName[0])






// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*100))+1)
// let min = 10;
// let max = 20;
// console.log(Math.floor(Math.random()*(max-min+1))+min);






// let num = 100000000000000;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString("en-IN"));
// console.log(typeof num)






let date = new Date();
// console.log(date);
// date.toDateString();
// date.toISOString();
// date.toJSON();
// date.toLocaleDateString();
// date.toLocaleString();
console.log(date.toLocaleTimeString());// date.toString();
// date.toTimeString();
// date.toUTCString();
// console.table([date.toDateString(),date.toISOString(),date.toJSON(),date.toLocaleDateString(),date.toLocaleTimeString(),date.toString(),date.toTimeString(),date.toUTCString()])














// Arrays


// let arr = [1,2,3,4,5]
// console.log("A",arr)
// // console.log(arr[4])






// let arr2 = arr.join() // convert the array into string
// console.log(arr2)
// console.log(typeof arr2)






// let arr = [1,2,3,4,5]
// console.log("A" , arr)






// let arr2 = arr.slice(2,4);
// console.log("B" ,arr2)
// console.log(typeof arr)






// let arr3 = arr.splice(2,4); // it basically separate or take out that particular part from the array
// console.log("A" ,arr)
// console.log("C", arr3)






// let array = [1,2,3,4,5,6]
// let array1 = array.unshift(9)
// console.log(array)






// let arrya2 = array.shift()
// console.log(array)





// let array3 = array.shift()
// console.log(array3)






// console.log(array)
// array.shift()
// console.log(array)
// array.unshift(9)
// console.log(array)








// array.push(9)
// console.log(array)
// array.pop()
// console.log(array)







// const marvel = ["ironman", "captain america", "thor", "loki"]
// const dc = ["batman", "aquaman", "joker", "superman"]

// console.log(marvel);
// console.log(dc);

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[4][2])
// const add = marvel.concat(dc)
// console.log(add);

// const all = [...marvel, ...dc] // it's a spread method
// console.log(all)






// console.log(Array.isArray("shivam"))
// console.log(Array.from("shivam"))

// console.log(Array.from({name: "shivam"})) //it gives an empty array because we didn't define we want key's array or value's array






// const score1 = 100;
// const score2 = "shivam";
// const score3 = false;

// console.log(Array.of(score1,score2,score3))







// const mySymb = Symbol("code");
// const JsUser = {
//     name : "shivam",
//     "fullName" : "Shivam Kumar",
//     rollNo : 123,
//     [mySymb] : "oyo",
//     mail : "shiavm@gmail.com",
//     contact : false,
//     examStatus : ["pass","pass","pass"]
// }
// JsUser.greetings = function(){
//     console.log("help")
// }





// JsUser.mail = "manish@gmail.com"
// Object.freeze(JsUser); // we  can't modify anymore
// console.log(JsUser.mail);
// console.log(JsUser["mail"]);
// console.log(JsUser.greetings());
// JsUser.myfunction = function(){
//     console.log(`hello ${this.name}`)
// }
// console.log(JsUser.myfunction())






// const newobj = {};
// newobj.name = "shivam";
// newobj.age = 22;
// console.log(`hello,`,newobj["name"]);






// const obj1 = {1:"a",  2:"b"}
// const obj2 = {3:"c",  4:"d"};
// const obj3 = {5:"e",  6:"f"};

// const obj4 = {obj1,obj2,obj3};
// console.log(obj4);

// const obj4 = Object.assign({},obj2.obj3);
// console.log(obj4);

// const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);






// const user = {
//     username : {
//         fullname : {
//             firstName :"shivam",
//             lastName : "kumar"
//         }
//     }
// }
// console.log(user.username.fullname["firstName"]);






// const newobj = {};
// newobj.id = "23mca20340";
// newobj.name = "shivam";
// newobj.age = 22;
// console.log(`hello,`,newobj["name"]);
// console.log(Object.keys(newobj));
// console.log(Object.values(newobj));
// console.log(newobj.hasOwnProperty("age"));
// console.log(typeof Object.entries(newobj));












// function saymyname(){
//     console.log("shivam")
// }
// saymyname()






// function add(){
//     const a = 10;
//     const b = 5;
//     console.log(`sum of a+b = ${a+b}`)
// }
// add()






// function add(a = 5,b = 9){    
//     return a+b;
// }






// const result = add(10,20)
// console.log(`sum of a+b = ${result}`)







// function calculateCartPrice(...num1){   
//     return num1;
// }
// console.log(calculateCartPrice(200,300,400))






// const user = {
//     userName : "shivam",
//     age : 21
// }

// function handleObject(anyobject){
//     console.log(`user name is ${anyobject.userName} and his age is ${anyobject.age}`);
// };

// handleObject(user);
// handleObject({
//     userName : "rashi",
//     age : 40
// })







// const arr = [100,200,300,400];
// const sum = 0;

// function returnvalue(arr,sum){
//     for(let i = 0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     return sum
// }
// // console.log(returnvalue(arr));
// console.log(returnvalue([1000,2000,3000,4000],sum))







// function one(){
//     const boy = "shivam";
//     function two(){
//         const girl = "rashi";
//         console.log(girl + boy) // girls can understand boys
//     }
//     two()

//     console.log(boy + girl) //but boys never understand girls
// }
// one()








// const user = {
//     username : "shivam",
//     price : 999,
//     welcome : function anotherUser(){
//         console.log(`${this.username} , welcome into my world`)
//         console.log(this) // print the current context(means values)
//     }        

// }
// user.welcome();
// user.username = "rashi"
// user.welcome();
// console.log(this)









// const name  = "shivam";
// console.log(typeof name);






// let number = 50

// function print() {
//   let square = number * number

//   if (number < 60) {
//     var largerNumber = 80
//     let anotherLargerNumber = 100

//     console.log(square)
//   }

//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }
// console.log(largestNumber)








// function print(){
//     const name = "shivam"
// }
// console.log(print())








// function check(){
//     let love = "rashi";
//     console.log(this.love) // "this" not work in function
// }
// check()






// const arrow = () => {
//     let love = "rashi";
//     console.log(this.love) // "this" not work in function
// }
// arrow()






// const add = (num1,num2)=>{
//     return num1+num2; 
// }







// // const add = (num1,num2)=> num1+num2; 
// const add = (num1,num2)=> (num1+num2);
// console.log(add(4,6));







// const add = (num1,num2)=> ({username:"shivam"})
// console.log(add(1,2))







// const array = [2,3,4,5];
// array.forEach(() =>())





// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)*************************************

// (function one(num1,num2){
    //named iife
//     console.log(num1+num2);
// })(12,9);

// ((num1,num2)=>{
    //simple iife or unnamed iife
//     console.log(num1+num2);
// })(12,12);








// const check = 0
// if(check){
//     console.log("true")
// }else{
//     console.log("teri ma ki chut")
// }






// trutthy
// "0" , " ", true , 'false', function(){}, [], {}

// falsy
// 0 , false, "" , -0, BigInt 0n, null , undefined , Nan







// const array = [];
// if(array.length === 0){
//     console.log("array is empty")
// }








// const newobj = {};
// if(Object.keys(newobj).length === 0){
//     console.log("object is empty")
// }





// Null Coalescing Operator*******************************************************

// const val = null ?? "shivam";
// console.log(val);

// let val1 = undefined ?? 26;
// console.log(val1);










// for in loops********************************************************************

// const array = [1,2,3,4];
// for (const i in array) {
//     console.log(array[i]);  
// }





// const myobj = {
//     name:"shivam",
//     number : 8586998356,
//     class : "mca"
//     }
// for (const key in myobj) {
//     console.log(myobj[key])
// }

// for(const key in myobj){
//     console.log(`my ${key} is ${myobj[key]}`)
// }





// const map = new Map;
// map.set("one", 1);
// map.set("two", 2);
// map.set("three", 3);
// for (const [key] in map) {
//     console.log(key)
// }












// for-of loops**************************************************************************

// const myobj = {
//     name:"shivam",
//     number : 8586998356,
//     class : "mca"
//     }
// for (const key in myobj) {
//     console.log(key);  // not iteratable by for-of loop
// }





// const myarray = [1,2,3,4,5]
// for (const i of myarray) {
//     console.log(i);         
// }

// const name = "hello , my name is sushant singh rajput";
// for (const i of name) {
//     if(i===" "){
//         continue;
//     }
//     console.log(i);
// }


// const map = new Map;
// map.set("one", 1);
// map.set("two", 2);
// map.set("three", 3);

// console.log(map)
// for (const key of map) {
//     console.log(key)
// }
// for(const [key, value] of map){
//     console.log(`key is ${key} and value is ${value}`);
// }









// const arrrrrrrr = ["jaiswal raand", "shivam", "manish kapoor"]
// arrrrrrrr.forEach(function(i){
//     console.log(i);
// })

// arrrrrrrr.forEach((i)=>{
//     console.log(i)
// })

// function print(i){
//     console.log(i);
// }

// arrrrrrrr.forEach(print);


// arrrrrrrr.forEach((i,index,arrrrrrrr)=>{
//     console.log(i,index,arrrrrrrr);
// })









// const objarray = [
//     {username : "shivam"},
//     {username : "manish"},
//     {username : "krish"},
//     {username : "tushar"}
// ]

// console.log(objarray[0]);
// console.log(objarray[0].username);

// objarray.forEach((i,index,objarray)=>{
//     console.log(i.username,index,objarray)
// })

// objarray.forEach((i)=>{
//     console.log(i.username)
// })










// const coding = ["js","cpp","java","swift","php"]
// const hold = coding.forEach((language)=>{
//     console.log(language);
// })
// console.log(hold);    //it's always shows us undefined




// const arr = [1,2,3,4,5,6,7,8,9];
// const ans = arr.filter((num)=> {
//    return num>4;
// })
// console.log(ans);









// const ans = [];
// arr.forEach((nums)=>{
//     if(nums>4){
//         ans.push(nums);
//     }
// })
// console.log(ans)

// const books = [
//     {title : "Book one", genre : "Fiction", publish : 1990, edition : 2004},
//     {title : "Book two", genre : "Non-Fiction", publish : 1999, edition : 2008},
//     {title : "Book three", genre : "comic", publish : 2000, edition : 20010},
//     {title : "Book four", genre : "comedy", publish : 2002, edition : 20012},
//     {title : "Book five", genre : "thriller", publish : 2004, edition : 2014},
//     {title : "Book six", genre : "horror", publish : 2006, edition : 2010},
//     {title : "Book seven", genre : "pornography", publish : 2007, edition : 2018},
//     {title : "Book eight", genre : "action", publish : 2010, edition : 2020},
//     {title : "Book nine", genre : "Story", publish : 1995, edition : 2024}
// ]

// const ans = books.filter((book)=>{
//     return book.genre==="pornography";
// })
// console.log(ans);

// const obj = {title : "Book nine", genre : "Story", publish : 1995, edition : 2024}
// const val = obj.map((item)=>{
//     if(item.publish>=2000){
//         console.log();
//     }
// })









// const nums = [1,2,3,4,5,6,7,8,9]
// const newNums = nums.map((num)=> num+10);
// console.log(newNums);
// const newNums = nums.map((num)=> num*10).filter((num)=> num>30);
// console.log(newNums);









// const nums = [1,2,3];
// const newNums = nums.reduce(function (accu,currval){
//     console.log(`accumulator ${accu} and current value ${currval}`);
//     return accu+currval;
// },0);
// console.log(newNums);








// const nums = [1,2,3];
// const newNums = nums.reduce((accu,currval)=>(accu+currval),0);
// console.log(newNums);







// const shoppingCart = [
//     {
//         item : "Java",
//         price : 5999
//     },
//     {
//         item : "Py",
//         price : 3999
//     },
//     {
//         item : "C++",
//         price : 7999
//     },
//     {
//         item : "Ruby",
//         price : 8999
//     }
// ]

// const total = shoppingCart.reduce((accu,items)=>(accu+items.price),0);
// console.log(total);
