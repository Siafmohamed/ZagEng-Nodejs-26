//problem one 
let x = 5;
let y = 4;

console.log(`x + y = ${x + y}`);           // 9
console.log(`x - y = ${x - y}`);           // 1
console.log(`x * y + 3 = ${x * y + 3}`);   // 23
console.log(`x + y * 2 = ${x + y * 2}`);   // 13
console.log(`(x + y) * 2 = ${(x + y) * 2}`); // 18
console.log(`x / y = ${x / y}`);           // 1.25
console.log(`x % y = ${x % y}`);           // 1
console.log(`(x - 2) * (y + 1) = ${(x - 2) * (y + 1)}`); // 12

//problem two 

let a = 10;
let b = "Hello";
let c = true;
let d = {name:"Backend"}; 

console.log(`Type of a : ${typeof a}`) //number 
console.log(`Type of b : ${typeof b}`) //string   
console.log(`Type of c : ${typeof c}`) //boolean  
console.log(`Type of d : ${typeof d}`) //object 

//Problem three 

let m = 7;
let w = 10;

console.log(`m > w : ${m > w}`);    // false
console.log(`m < w : ${m < w}`);    // true
console.log(`m >= w : ${m >= w}`);  // false
console.log(`m <= w : ${m <= w}`);  // true
console.log(`m == w : ${m == w}`);  // false
console.log(`m === w : ${m === w}`);// false
console.log(`m != w : ${m != w}`);  // true
console.log(`m !== w : ${m !== w}`);// true


// problem four

let p = true; 
let q = false; 

console.log(`p && q : ${p && q}`);      // false 
console.log(`p || q : ${p || q}`);      // true
console.log(`!p : ${!p}`);              // false 
console.log(`(p && !q) : ${p && !q}`);  // true
console.log(`(!p || q) : ${!p || q}`);  // false

//problem five  

let num = 20; let str = " years old"; 

console.log(" I am" + " " + num + str + ".")  // i am 20 years old. 
console.log("Age: " + num); //age : 20
console.log("Result = " + (num + 5)); // result = 25
console.log("20" + 10); // "2010"
console.log((20 + 10) + " days"); // "30 days"
console.log("JS" + " " + "Course"); // js course 

//problem six 

let n = 10; 

console.log(`n+= 5 : ${n +=5}`) //15
console.log (`n-=3 : ${n -=3}`) //12 
console.log(`n *=2 : ${n *=2}`) //24
console.log(`n /= 5 : ${n /= 5}`) //4.8
console.log(`n%= 4 : ${n%= 4}`) //0.8 

//problem seven 
let t = 8; 

console.log(`t++ : ${t++}`) //8
console.log(`++t : ${++t}`) //9
console.log(`t-- : 4{t--}`) //9
console.log(`--t : ${--t}`) //8


//problem eight 
let k = 4;
let l = 2;
let o = "3";

console.log("1. k + l + o =", k + l + o);        // "63"
console.log("2. k + (l + o) =", k + (l + o));    // "423"
console.log("3. (k + l) * Number(o) =", (k + l) * Number(o)); // 18
console.log("4. k + l * o =", k + l * o);        // 10

