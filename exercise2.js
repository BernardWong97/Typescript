// boolean
var isTrue = false;
console.log("isTrue value is: " + isTrue);
// number
var decimal = 4;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("decimal value is: " + decimal);
console.log("hex value is: " + hex);
console.log("binary value is: " + binary);
console.log("octal value is: " + octal);
// String
var color = "blue";
color = 'red';
console.log("color value is: " + color);
var fullName = "Bernard Wong";
var age = 20;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old 5 months later.";
var sentence2 = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
console.log(sentence2);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
