// Temporal Dead Zone is the phase between the Hoisting stage
// and till a particular variable is assigned
console.log(p);

var p = 10; 
// change the var to let to eliminate temporal dead zone or initialize all the variables in the starting of the file


// Shadowing in javascript

var a = 100;
{
    var a = 10;
    var b = 20;
    var c = 30;
}

console.log(a,b,c);


// Illegal Shadowing
let d = 100;
{
    
    var d = 10;
}
console.log(d);