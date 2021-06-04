let name = {
    firstName: "Satyam",
    lastName: "Bhalla",
    // printFullName: function(){
    //     console.log(this.firstName,  this.lastName);
    // }
}

let printFullName = function(state,country){
    console.log(this.firstName+" "+this.lastName + " from "+state+", "+country);
}

let name2 = {
    firstName: "Deepak",
    lastName: "Karnani",
    // printFullName: function(){
    //     console.log(this.firstName,  this.lastName);
    // }
}

// name.printFullName();
// name2.printFullName();

//Function Borrowing

// printFullName.call(name,"Punjab", "India");
// printFullName.call(name2, "Rajasthan");

// printFullName.apply(name,["Punjab","India"]);
// printFullName.apply(name2, ["Rajasthan"]);

// bind method
let printMyName = printFullName.bind(name,"Punjab","India");
// console.log(printMyName);
// printMyName();



//  Functions
// 1.) Function Statement or Function Declaration
function a(){
    console.log("a");
}
a();

// 2.) Function expression
let b = function(){
    console.log("b");
}
b();

// 3.) Anonymous Function
// function (){
//     console.log("b");
// };

// 4.) Named Function Expression
let c = function xyz(){
    console.log(xyz);
}
c();


// First class function
// Functions are first class citizens in JS. 
// They can be passed as an argument, returned or stored as a value

// Parameters vs Arguments
// Parameters:- Placeholders inside he function-> function a(param1,param2)
// Arguments:- Variables,entities, values passed in the function call