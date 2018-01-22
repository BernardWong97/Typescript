"use strict";
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
// Array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Number " + (i + 1) + " is: " + list[i] + ".");
} // for
// Tuple
var x;
x = ["hello", 10];
console.log("Tuple example: " + x[0].substr(1));
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is: " + colorName);
console.log("Enum: Value of c is: " + c);
console.log("Enum: Name of c is: " + Color[c]);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
//any array
var listany = [1, true, "free"];
for (var i = 0; i < listany.length; i++) {
    console.log("Before: Entry " + (i + 1) + " is: " + listany[i] + ".");
} // for
listany[1] = 100;
for (var i = 0; i < listany.length; i++) {
    console.log("After: Entry " + (i + 1) + " is: " + listany[i] + ".");
} // for
