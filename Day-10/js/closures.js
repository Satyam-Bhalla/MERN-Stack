/*
    Closure:- A function bind together with its lexical environment
*/

// Example 1
let b = 20;
function x(){
    let a = 10;
    return function y(){
        console.log(a,b);
    };
    
}



let z = x();
// z();

// x()();

// Example 2
function a(){
    var q = 10;
    function c(){
        console.log(q);
    }
    q = 100;
    return c;
}

// a()();

// Example 3
function outer(){
    var r = 100;
    function inner(){
        var t = 200;
        function innermost(){
            console.log(r,t);
        }
        return innermost;
    }
    return inner;
}


let inner = outer();
let innermost = inner();
// innermost();

console.log("*********Tricky Questions*******")

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

// var counter1 = counter();
// counter1();
// var counter2 = counter();
// counter2();
// counter2();

// Task
function timer(){
    for(var i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
}
timer();