let x = 999999999999999;
let y = 9999999999999999;

console.log(x);
console.log(y);

console.log(0.2+0.1);
console.log((0.2*10 + 0.1*10)/10);

x = "100";
y = "10";
console.log(x-y);


if(isNaN(x/"hello")){
    console.log("Its a NaN");
}
console.log(typeof NaN);



console.log(2/0);
console.log(-2/0);
console.log(typeof Infinity);

let num = new Number(100);
console.log(num);


console.log("************Number Methods*********************");


let n = 100;
console.log(n.toString());
console.log((100).toString());

n = 9.68;
console.log(n.toFixed(6));
console.log(n.toPrecision(3));

n = "123.5";
console.log(Number(n));
console.log(parseInt(n));
console.log(parseFloat(n));