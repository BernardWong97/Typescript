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

// Array
let list: number[] = [1, 2, 3];
for(let i = 0; i < list.length; i++){
    console.log("Number "+ ( i + 1 ) + " is: " + list[i] + ".");
} // for

// Tuple
let x: [string, number];
x = ["hello", 10];

console.log("Tuple example: "+ x[0].substr(1));

// Enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log("Enum: Value of colorName is: "+ colorName);
console.log("Enum: Value of c is: "+ c);
console.log("Enum: Name of c is: " + Color[c]);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log(notSure);

//any array
let listany: any[] = [1, true, "free"];
for(let i = 0; i < listany.length; i++){
    console.log("Before: Entry "+(i+1)+" is: "+listany[i]+".");
} // for

listany[1] = 100;

for(let i = 0; i < listany.length; i++){
    console.log("After: Entry "+(i+1)+" is: "+listany[i]+".");
} // for