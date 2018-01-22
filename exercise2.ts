// boolean
let isTrue: boolean = false;
console.log("isTrue value is: " + isTrue);

// number
let decimal: number = 4;
let hex: number = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log("decimal value is: " + decimal);
console.log("hex value is: " + hex);
console.log("binary value is: " + binary);
console.log("octal value is: " + octal);

// String
let color: string = "blue";
color = 'red';
console.log("color value is: " + color);

let fullName = "Bernard Wong";
let age = 20;

let sentence = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old 5 months later.`;

let sentence2 = "Hello, my name is " + fullName + ".\n\n" +
"I'll be " + (age + 1) + " years old next month.";

console.log(sentence);
console.log(sentence2);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log(notSure);