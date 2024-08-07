// Guess random number game in Java Script

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * 100)
console.log(answer)
let attempts = 0;
let guess;
let running = true;


while(running){
    guess = prompt(`Guess a random number between ${minNum} - ${maxNum}`);
    guess = Number(guess)
    //console.log(typeof guess, guess)

    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        alert("Out of range");
    }
    else{
        attempts++;
        if(guess < answer){
            alert("Too low to the answer. Keep trying!!");
        }
        else if (guess > answer){
            alert("Too High than the answer. Keep trying!!");
        }
        else{
            alert(`Correct! The random number is ${answer}, it took you ${attempts} attempts`);
            running = false;
        }
    }
    
}
