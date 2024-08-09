// Rest Parameters = (...rest) allow a function work a variable 
//                   number if arguments by building them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array


// function openFridge(...foods){
//     console.log(...foods)
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);


// function getFood(...foods){
//     return foods;
// }

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);


// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(`Your total is $${total}`)

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(80, 60, 78, 96, 90);
// console.log(`Your average is ${total}`);


// Function to combine strings together
