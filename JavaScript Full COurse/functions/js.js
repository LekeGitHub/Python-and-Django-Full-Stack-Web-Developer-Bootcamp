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