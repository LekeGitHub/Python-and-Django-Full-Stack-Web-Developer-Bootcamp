// Spread Operator = ... allows an iterable such as an 
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the element)

// let numbers = [1, 2, 3, 4, 5];
// let maxNum = Math.max(...numbers)
// let minNum = Math.min(...numbers)

// console.log(maxNum)
// console.log(minNum)


let userName = "Oluwa Leke"
let letters = [...userName].join("");
console.log(letters)