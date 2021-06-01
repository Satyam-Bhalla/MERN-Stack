// To show an alert message to the user
// alert(2+3);
// console.log(2+3);

// To print the web page
// window.print();

// var x = 10;
var y = 20;
z = 30;
z = 40;
// console.log(x+y+z);

var person = "Satyam";
var person = '  Satyam\'s car';
var pi = 3.14;
var area = 100;
var flag = true;


// Hoisting
// console.log(a);
function a(){
    console.log(x);
    var x = 10;
}
a();



// let and const are used for defining block scope variables
let hello = "Hello everyone";
hello = "Greetings";
{
    let hello = "Hello world";
    console.log(hello);
}
hello = "Hi everyone";
console.log(hello);

const pi_value = 3.142;
// pi_value = 3.14;
console.log(pi_value);

let direction = "left";
{
    console.log(direction);
}


for(let i=0; i<5; i++){
    console.log(i);
}

// console.log(i);






/* Operators
Assignment operator -> =, +=, -= , *= , /=, %=, **=
Arithmatic operator ->  +-/*

*/
console.log("*********************Operators*********************")
var first = 10;
var second = 20;

second += first;  // second = second+first;

// console.log(second);
// console.log(first+second);
// console.log(first - second);
// console.log(first*second);
// console.log(first/second);
// console.log(first**second);
// console.log(first%second);

console.log("*********************Comparison Operators******************")
// console.log(2.0===2);
// console.log(2==="2");
// console.log(2=="2");
// console.log(3>2);
// console.log(3>=2);
// console.log(2<3);
// console.log(2<=3);
// console.log(10 != "10");


// if(2>3){
//     console.log(true);
// }else{
//     console.log(false);

// }

// Ternary operator
// 2>3 ? console.log(true) : console.log(false);


console.log("*************************Logical Operators***********************");
// && || !
// if( (5%2 === 0)  && (4%2===0) ){
//     console.log("And Logical operator demo");
// }else if((5%2===0) || (4%2===0)){
//     console.log("Or logical operator demo")
// }else{
//     console.log("Nothing worked")
// }

// if(!false){
//     console.log("True");
// }else{
//     console.log("False");
// }




// Demo with && and || combined
// if( (3>2 && 2<=3) || (false && false) ){
//     console.log("Inside if combination")
// }else{
//     console.log("Inside else block");
// }

// Typeof and instanceof Operators
console.log("*******************Type Operators*******************");
// console.log(typeof 2);
// console.log(typeof "hello");
// console.log(typeof [12,23]);
// console.log(typeof {"q":10});


// Bitwise Operators
console.log("********************Bitwise Operators************************");
console.log(5&1);    
//     0101 
//     0001
//AND  0001 => 1

console.log(5|2);
//       0101
//       0010
// OR    0111  => 7



console.log(~5);
//      ~0101  => 1010  => 10
//      11111111111111111111111111111010


console.log(5<<1);
// 0101 << 1   1010   > 10

console.log(5>>1);
// 0101 >> 1   0010  => 2

console.log(5^1);
//        0101
//        0001
// XOR    0100   => 4


