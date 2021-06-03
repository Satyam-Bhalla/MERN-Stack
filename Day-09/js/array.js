const arr = [1,2,7];
let array = [1,2,3,];

// arr = [1,2,3,4];

arr.push(4);
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr.length);
console.log(arr[arr.length - 1]);



//Loops
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}



function multiplyByTwo(num,index){
    // console.log(array);
    // console.log("Index: ",index, " Number:", num*2);
}

arr.forEach(multiplyByTwo);
console.log(arr);

arr.push(8);
arr[arr.length] = 9;
console.log(arr);




// Associative arrays
let car = [];
car[0] = "BMW";
car[1] = "Audi";
console.log(car);

car["car name"] = "Ferrari";
console.log(car);
console.log(car["car name"]);


let arrays = new Array(10,20);
// arrays = [1,2,3,4,5];
console.log(arrays)

console.log(Array.isArray(arrays));
console.log(arr instanceof Array);

console.log("****************Methods******************")

var veg = ["Tomato", "Potato", "Pumpkin"];

console.log(veg.toString());

console.log(veg.join("////"));

veg.shift();
console.log(veg);

veg.unshift("Tomato");
console.log(veg);

veg[0] = "Onion";
console.log(veg);

delete veg[0];
console.log(veg);

veg[0] = "Tomato";
console.log(veg);

veg.splice(1,1,"Onion","Beans");
console.log(veg);

veg.splice(0,1);
console.log(veg);


let students = ["A","B","C"];
let Guides = ["D","E","F"];
let faculty = ["G","H"];
let total = students.concat(Guides,faculty);
console.log(total);

let studentCopy = total.slice(0,3);

console.log(studentCopy.reverse());

veg.sort();
console.log(veg);


let nums = [4,3,5,6,7,80,9];
console.log(nums.sort(
    function(a,b){return b-a}
));

