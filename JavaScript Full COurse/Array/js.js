// Array = a variable ike structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut"); // .push method is used to add an element to the end of the array
// fruits.pop(); // .pop - removes last element
// fruits.unshift("mango"); // .unshift - adds an element to the begining of the array
// fruits.shift(); // .shift - removes an element form the beginning.
fruits.push("coconut");
fruits.push("carrot");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length; // .length - gets the total number of element in array
// console.log(numOfFruits);
// console.log("/////////");

// let index = fruits.indexOf("Carrot") // .indexOf - gets the index of an element in array,
//                                      // it returns -1 if the element does not exist in the array.
// console.log(index);

// console.log("/////////");
// console.log("looping through an Array....");

// for(let i = 0; i < fruits.length; i++){ // Helps to print out the items in an array in defferent order
//     console.log(fruits[i]);
// }

// console.log("/////////");
// console.log("Printing the elements and a reverse order")
// for(let i = fruits.length - 1; i >= 0; i--){ // Helps to print out the items in an array in defferent order
//     console.log(fruits[i]);
// }

// console.log("/////////");
// console.log("Short cut - Printing the elements")

fruits.sort().reverse();
for(let fruit of fruits){ // Helps to print out the items in an array in defferent order
    console.log(fruit);
}

console.log("Sorting Element")


