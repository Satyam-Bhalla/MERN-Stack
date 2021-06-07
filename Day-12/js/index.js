// Error handling
// try, catch and finally
// Error Creation -> throw


function errorHandling(flag){
    try{
        let a = 10;
        if(flag && isNaN("sdfkhb")){
            throw {message:"Invalid statement", code: 1001};
        }else{
            console.log("No error");
        }
    }catch(err){
        console.log(typeof err);
        console.log(err.message);
        console.log(err.code);
    }finally{
        console.log("Clear memory");
    }
}

// errorHandling(true);


function change(obj){
    obj.innerHTML = "Text changed";
    console.log("Text is going to change");
}

function showPopUp(){
    // alert("Welcome to the website");
    // console.log("Website loaded");
}


function changeBackground(obj){
    obj.style.backgroundColor = "red";
}

function changeBackgroundAgain(obj){
    obj.style.backgroundColor = "white";
}

function changeCase(){
    let element = document.getElementById("name");
    element.value = element.value.toUpperCase();
}

// document.getElementById("name").addEventListener('focus',function(){
//     document.getElementById("name").style.borderColor = "blue";
//     document.getElementById("name").style.borderWidth = "2px";
// })

// IIFE -> Immediately invoked function expression
(function(){
    // document.getElementById("para").onclick = change;
})();

// alert()


// Callbacks
// function first(){
//     // document.getElementById("para").innerHTML = "Hello";
//     setTimeout(function(){
//         console.log("First function is running");
//     },200);

//     return 0;
// }

// function second(first){
//     let value = first();
//     document.getElementById("para").innerHTML = value;
// }

// // first();
// second(first);

// const message =  function(){
//     console.log("This is a  message");
// }
// // message();
// setTimeout(message, 1000);
// console.log("Hello");
// for(let i = 0;i<100000;i++){

// }
// console.log("Loop finished!");


// Callback hell
/**
 * firstRequest(function(response){
     secondRequest(response, function(nextResponse){
        thirdRequest(nextResponse, function(finalResponse){
            console.log(finalResponse)
        },errorCheck)
    },errorCheck)
 }, errorCheck)
  
 */





// Promises
/*
    1.) Pending
    2.) Fullfilled / Resolved
    3.) Rejected

    Chaining is done using then and catch functions
    */ 

// firstRequest()
// .then(function(response){
//     return secondRequest(response);
// }).then(fucntion(nextResponse){
//     return thirdRequest(nextResponse);
// }).then(function(finalResponse){
//     console.log(finalResponse);
// }).catch(failureCallback){

// }
// const myPromise = new Promise(function(resolve,reject) {
//     // if condition mets then resolve otherwise reject
//     if(true){
//         resolve("Promise resolved");
//     }else{
//         reject("Promise rejected");
//     }
// })


// Prototypes in Javascript with Inheritance
let arr = [1,2,3];

let obj = {
    "firstname": "Satyam",
    "lastName": "Bhalla"
}

let obj2 = {
    city: "Amritsar"
}


// Never use inheritance like this
obj2.__proto__ = obj;


// Array.prototype.push = function(){
//     console.log("Item Pushed")
// }

// Array.prototype.print = function(arr2){
//     for(let i=0;i<arr2.length;i++){
//         console.log(arr2[i]);
//     }
// }


function fun(){
    console.log("Function called");
}




