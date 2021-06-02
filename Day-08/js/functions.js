// Benefits of a function
// 1.) Code Readability
// 2.)  Code reusability


// Normal function
function sqaure(num){
    return num*num;
}

// Deafult parameter
function square1(num=4){
    return num*num;
}

let l = 1;

function area(){
    let l = 10;
    let b = 20;
    console.log(l);
    return l*b;
}


// console.log(l);
console.log(area());


console.log(sqaure(5));
console.log(square1());


// FUnction without a return statement
function print(){
    console.log("Printing some random text");
}

print();



console.log("*****************Tricky Example*****************");

function a(){
    let b = 1000;
    c();
    function c(){
        console.log(b);
    }
    
}

a();


console.log("*****************Tricky Example 2***************");
{
    var s = 50;
}
function demo(){
    console.log(s);
    let z = 10;
    c();
    function c(){

    }
}

//Lexical Environment = Local memory + a pointer referencing to the Lexical environment of it's parent


// console.log(z);
demo();

