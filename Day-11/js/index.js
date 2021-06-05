// Object literals

// let name = "Satyam";
// let age = 20;
// let email = "satyambhalla17@gmail.com";
// let hobbies = ["Reading books", "Guitar", "Coding", "Kite Flying"];

let userOne = {
    name: "Satyam",
    age: 20,
    email: "satyambhalla17@gmail.com",
    hobbies: ["Reading books", "Guitar", "Coding", "Kite Flying"],
    login(){
        console.log("You logged in");
        console.log(this);
    },
    logout(){
        console.log("You are logged out");
        // console.log(this);
    },
    logHobbies(){
        // console.log(this.hobbies);
        
        // for( let i=0;i<this.hobbies.length;i++){
        //     console.log(this.hobbies[i]);
        // }

        this.hobbies.forEach(function(element,i){
            console.log(element+'->'+i);
        })
    }
}

userOne.hobbies.push("Cricket");

// console.log(userOne.name);
// userOne.login();
// userOne.logHobbies();
// userOne.logout();

// console.log("*****************Classes************");
class Profile{
    constructor(name,email,age){
        this.name = name;
        this.age = age;
        this.email = email;
        this.count = 0;
    }

    login(){
        console.log(this.name, 'has logged in!');
        // console.log(this);
        this.name = "Harsh";
        // console.log(this);
        return this;
    }

    logout(){
        console.log(this.name, 'has logged out!');
        return this;
    }

    incrementCounter(){
        this.count++;
        console.log(this.name," incremented the count to ", this.count);
        return this;
    }


}

let user1 = new Profile("Satyam","satyambhalla17@gmail.com",24);
let user2 = new Profile("Harsh","hello@gmail.com",20);
let user3 = new Profile("Harshit","harshit@gmail.com",20);
// user1.login();
// user1.logout();
// user1.incrementCounter();
// user1.incrementCounter();

//  return this can help us with method chaining
// user1.login().incrementCounter().incrementCounter().incrementCounter().logout();

class Admin extends Profile{
    deleteUser(user){
        users = users.filter(u => user.email !== u.email);
    }
}

// console.log(user1 instanceof Profile);
let admin = new Admin("Deepak","deepak@gmail.com",20);

let users = [user1,user2,user3];
// console.log(users);
admin.deleteUser(user2);
// console.log(users);

// console.log("*****************Destructuring************");
// var[a,,b] = [1,2,3];
// console.log(a);
// console.log(b);

// console.log("*****************Concatenation************");
const array1 = ['a','b','c'];
const array2 = [1,2,3];
const array3 = array1.concat(array2);
// console.log(array3);

 // Spread Operator
var parts = ["shoulders","knees"];
var body = [...parts,"Head","Foot"];
// console.log(body);


let obj1 = {1:'a'}
let obj2 = {2:'b',...obj1};
// console.log(obj2);

//Spread + Object Literals
let {a,b,...c} = {x:1,y:2,a:3,b:4};
// console.log(a);
// console.log(b);
// console.log(c);

function demo(param1,...param2){
    console.log(param1);
    console.log(param2);
}

// demo(1,2,3,4,5,6);


// Map method
const numbers = [1,2,3,4,5,6,7,8,9,10];
const double = numbers.map(item => item*2);
const double2 = numbers.map(function(item){
    return item*2;
})
console.log(double);
console.log(double2);


// Arrow function
let hello = function(){
    return "Hello";
}
// console.log(hello);



hello = (param1, param2) => {
    
    return param1+param2;
} 

console.log(hello("Hello"," World!"));

hello = param1 => {
    return param1;
}
console.log(hello("Hello world!"));