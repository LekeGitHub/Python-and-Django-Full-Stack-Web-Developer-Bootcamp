// Counter Java Script

const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const IncreaseBtn = document.getElementById("IncreaseBtn")

const countlabel = document.getElementById("counter")
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

IncreaseBtn.onclick = function(){
    count ++;
    countlabel.textContent = count;
}