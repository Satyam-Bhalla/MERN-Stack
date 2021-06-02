// number
var l = 16;
console.log(typeof l);

// string
var name = "Satyam";
console.log(typeof name);

// let firstName = "Sanyam";



// unordered map O(1)
// object -> JSON (Javascript Object Notation)
var obj = {
  "name": "Verna",
  brand: "Hyundai",
  obj2: {
      "color": "black",
      "year": 2020,
      "insurances": ["physical", "engine", "body"]
  },
  1 : 2,
  fullName: function(){
      return this.name;
  }
};



// Object Name [key name] = value;
obj["model"] = 102;



console.log(obj);
console.log(typeof obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));


// console.log(obj.firstName);
// console.log(obj["lastName"]);
console.log(obj.obj2.insurances);
console.log(obj["obj2"]["insurances"][1]);
console.log(obj.fullName());

let array = [1,2,"3"];
console.log(array);

// console.log(array[0]);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}