// alert("Welcome to javaScript");

/*alert("Welcome to javaScript");
alert("Welcome to javaScript"); */

// firstName
// first_name

// data types  in js
// let a = 5.45;
// let a = "5";
// let a = true;
// let a = null;
// console.log(typeof a);

// control structure=> conditional statements, looping
// conditional statement => if, if else, if else if, nested if else, switch
// loop => for, while, do while loop

// if
/*if(condition){
    block of code to execute if condition is true 
}*/
// let a = 10;
// if (a > 0) {
//   let msg = `${a} is positive number `;
//   console.log(msg);
// }

/*
if else syntax
if(condition){
    block of code to execute if condition is true 
}
else{
     block of code to execute if condition is false
} */

// let a = -10;
// if (a > 0) {
//   let msg = `${a} is positive number `;
//   console.log(msg);
// } else {
//   let msg = `${a} is negative number `;
//   console.log(msg);
// }

/*
if else syntax
if(condition1){
    block of code to execute if condition1 is true 
}
    elseif(condition2){
      block of code to execute if condition2 is true 
    }
else{
     block of code to execute if all the conditions are false
} */

// eg

// let a = 0;
// if (a > 0) {
//   let msg = `${a} is positive number `;
//   console.log(msg);
// } else if (a < 0) {
//   let msg = `${a} is negative number `;
//   console.log(msg);
// } else {
//   let msg = ` The  number is ${a} `;
//   console.log(msg);
// }

//h/w-
//  write a js program to find the greatest number among three numbers.
//  write a js program to find the number is even or odd.

// nested if else
// eg
// let age = 18;
// let hascitizenship = false;
// if (age > 16) {
//   if (hascitizenship) {
//     console.log("You can have a voter id");
//   } else {
//     console.log("to make a voter id you need a citizenship");
//   }
// } else {
//   console.log("Your age is not valid to have a citizenship card ");
// }

// switch
/*variable 
switch(variable){
    case condition :{
        block of code to execute if condition is true
    }
}
    */
//    Example
// let day = 1;
// switch (day) {
//   //if(day==1)
//   case 1: {
//     console.log("Today is sunday");
//     break;
//   }
//   //else if(day==2)
//   case 2: {
//     console.log("Today is monday");
//     break;
//   }
//   case 3: {
//     console.log("Today is Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Today is wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Today is Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Today is Friday");
//     break;
//   }
//   case 7: {
//     console.log("Today is saturday");
//     break;
//   }
//   default: {
//     console.log("Invalid number");
//   }
// }

// let day = "abc";
// switch (day) {
//   //if(day=="sun")
//   case "sun": {
//     console.log("Today is sunday");
//     break;
//   }
//   case "mon": {
//     console.log("Today is monday");
//     break;
//   }
//   case "tue": {
//     console.log("Today is Tuesday");
//     break;
//   }
//   case "wed": {
//     console.log("Today is wednesday");
//     break;
//   }
//   case "thu": {
//     console.log("Today is Thursday");
//     break;
//   }
//   case "fri": {
//     console.log("Today is Friday");
//     break;
//   }
//   case "sat": {
//     console.log("Today is saturday");
//     break;
//   }
//   default: {
//     console.log("Invalid day");
//   }
// }

// loop
/*
for loop 
for(initialization ; condition ; increment/ decrement){
block of code to execute until the is true 
}
*/

// for (let i = 0; i < 5; i++) {
//   //   console.log(i);
//   document.write(i);
//   document.write("<br>");
// }

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// for (let i = 5; i >= 1; i--) {
//   if (i == 3) {
//     for (let j = 1; j <= i; j++) {
//       document.write("#");
//       document.writeln(" ");
//     }
//   } else {
//     for (let j = 1; j <= i; j++) {
//       document.write("*");
//       document.writeln(" ");
//     }
//   }

//   document.write("<br>");
// }

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     if (i == 5 && j == 3) {
//       document.write("#");
//       document.writeln(" ");
//     } else {
//       document.write("*");
//       document.writeln(" ");
//     }
//   }
//   document.write("<br>");
// }

// for (let i = 11; i >= 1; i -= 2) {
//   for (let j = 1; j <= i; j++) {
//     document.write("*");
//     document.writeln(" ");
//   }

//   document.write("<br>");
//   for (let a = 11; a >= i; a -= 2) {
//     document.writeln("&nbsp");
//   }
// }

//break in loop
// for (let i = 1; i <= 5; i++) {
//   if (i == 2) {
//     document.write(i);
//     document.write("<br>");
//     break;
//   }
//   document.write(i);
//   document.write("<br>");
// }

// continue in loop
// for (let i = 1; i <= 5; i++) {
//   if (i == 2) {
//     continue;
//   }
//   document.write(i);
//   document.write("<br>");
// }

// functions

// function function-name(){
//     //block of code
// }

// function_name()

function greet() {
  document.write("Hello guys welcome to web technology");
}
// greet();
// greet();

// function sum(a, b) {
//   let c = a + b;
//   document.writeln("The sum of two nummer is:", c);
// }
// sum(20, 3, 5);

function add() {
  let a = 5;
  let b = 4;
  return a + b;
}
// let r = add();
// document.writeln("The output is :", r);

function sum(a, b) {
  return a + b;
}
// let result = sum(4, 5);
// document.writeln("The sum of two nummer is:", result);

function calculator(a, b, o) {
  switch (o) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
    case "/": {
      return a / b;
    }
    default: {
      return "Enter a valid symbol ";
    }
  }
}
// Array,spread operator
// let result = calculator(2, 3, "-");
// console.log(result);

//arrow function;
const arrowFn = () => {
  console.log("This is arrow function");
};
// arrowFn();

// ()=>{
// console.log("I am anonymous function");
// }

const arrowsum = (a, b) => {
  // console.log(a+b);
  return a + b;
};

// let res=arrowsum(2,3);
// console.log(res);

const multiplereturn = () => {
  return `<div>
	<p> hello world </p>
	<p> hello world </p>
	</div>`;
};

// console.log(multiplereturn());

// self invoked function
// (function selfinvoked (){
// console.log(" i am self invoked / called function");
// }())

// recursive function
// factorial of a number

function factorial(number) {
  if (number < 0) {
    return `undefined `;
  }
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
// let factresult= factorial(-4);
// console.log(factresult);

// dialog box
// alert, prompt, confirm

// alert("Welcome");

// let userres = confirm("Are you human?");
// console.log(userres);

// let userres = prompt("Enter your grade");
// console.log(userres);
