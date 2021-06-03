// String
let firstName = "Mahesh";
let lastName = "Bhatt";
let name = firstName+" "+lastName;

console.log(firstName.length);
console.log(name);



document.getElementById("test").innerHTML = name;

let secondName = "Mahesh Bhatt";
console.log(name === secondName);




let dummyName = new String("Mahesh Bhatt");
let secondDummyName = new String("Mahesh Bhatt");
console.log(dummyName);

console.log(secondDummyName === dummyName);


console.log("****************String Properties******************");
let str = "This cat is a cat.";
console.log(str.indexOf("cat"));
console.log(str.lastIndexOf("cat"));

if(str.indexOf("cats")==-1){
    console.log("String not found in str")
}

console.log(str.search("cats"));
// Search can accept regular expressions

console.log(str.slice(5,14));
console.log(str.slice(-14,-5));
console.log(str.slice(5));
console.log(str.slice(-14));


// Substring does not support negative values
console.log(str.substring(5,14));


// Substr takes length as 2nd argument
console.log(str.substr(5,3));

console.log(str.replace("cat","dog"));
console.log(str.replace(/cat/g,"dog"));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

let str2 = "I love dogs!";

let str3 = str.concat(" ",str2);
console.log(str3);

let str4 = "       Hello world       ";

// Method Chaining
console.log(str4.trim().toLowerCase().replace("hello","Hi"));

let num = "";
num = num.padStart(3,"*");
num = num.padEnd(5,0);
console.log(num);

str = "az AZ";
console.log(str.charAt(3));
console.log(str.charCodeAt(4));

str[0] = "o";
console.log(str);


// 1,2,3,4,5
let numArray = "1,2,3,4,5";
numArray = numArray.split(",");
console.log(numArray);

