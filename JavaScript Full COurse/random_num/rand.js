// Random number generator

const roll = document.getElementById("btn");
const rand1 = document.getElementById("label1");
const rand2 = document.getElementById("label2");
const rand3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1, randomNum2, randomNum3;

roll.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    rand1.textContent = randomNum1;
    rand2.textContent = randomNum2;
    rand3.textContent = randomNum3;  
}