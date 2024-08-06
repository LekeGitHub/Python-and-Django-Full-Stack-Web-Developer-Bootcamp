// Ternary Operator = a shortcut to if{} and else{} statement
//                    helps to assign a variable based in a condition;
//                    condition ? codeIfTrue : codeIfFalse;


// let age = 1;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

// let time = 6;
// let greeting = time < 12 ? "Good morning":"Good afternoon"
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100)}`);