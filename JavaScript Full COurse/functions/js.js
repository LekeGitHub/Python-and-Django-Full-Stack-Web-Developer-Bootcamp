// Function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code


// function happyBirthday(username, age){
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday to you ${username}`);
//     console.log(`You are ${age}`);
//     ;
// }

// happyBirthday("Leke", 22);
// happyBirthday("SpongeBob", 30);

function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2,3)
console.log(answer)

function subtract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}

console.log(divide(10, 6));

function isEven(num){
    // Using Tenary Operation
    return num % 2 === 0 ? true : false;

    // Using If else statement below
    // if(num % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}

console.log(isEven(11))

function notEven(num){

    // Using Tenary Operation
    return num % 2 != 0 ? true : false;

    // Using If else statement below
    // if(num % 2 != 0){
    //     return true;
    // }else{
    //     return false;
    // }
}
console.log(notEven(10));