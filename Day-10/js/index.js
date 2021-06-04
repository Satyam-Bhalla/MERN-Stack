console.log("Day 10");

let d = new Date();
console.log(d);

// 4 ways to create date object
/*
    1.) new Date() -> current date time
    2.) new Date(year,month) -> It gives the first day of the given month in the given year
    3.) new Date(year,month,day,hours,minutes,seconds,milliseconds)
    4.) new Date(2021) -> milliseconds 
*/
d = new Date(2021,5,4,8,17,56,0);
console.log(d);

d = new Date(2021,5,4,8);
console.log(d);

d = new Date(2021,5,4);
console.log(d);

console.log("******************Date Methods******************")
let dt = new Date();
console.log(dt.getTime());
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay()); // Weekday
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());


// Switch Stetement
// if(new Date().getDay() == 5){
//     console.log("Friday");
// }else if(new Date().getDay() == 6){
//     console.log("Saturday");
// }else{
//     console.log("Some other day");
// }

// It uses strict comparison ====
switch(new Date().getDay()){
    case 0:
    case 1:
        console.log("Sunday, Monday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Some other day");
}


console.log("*****************Loops*****************");

let obj = {1: "hello", 2: "everyone", 3: "some value"};
let arr = [1,2,3,4,5];

console.log("While loop")

let idx = 0;
while(idx<arr.length){
    if(idx==3){
        break;
    }
    console.log(arr[idx]);
    
    idx++;
}

console.log("For Loop");

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(index==3){
        continue;
    }
    console.log(element);
}

console.log("For in loop");
for (const key in obj) {
    console.log(key, "->", obj[key]);
}
for (const key in arr) {
    console.log(key);
}


console.log("For of loop");
for (const value of arr) {
    console.log(value);
}


