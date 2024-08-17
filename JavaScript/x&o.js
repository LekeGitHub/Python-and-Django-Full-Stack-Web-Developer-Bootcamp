const reset = document.querySelector("#reset");

const r1b1 = document.querySelector("#r1b1");
const r1b2 = document.querySelector("#r1b2");
const r1b3 = document.querySelector("#r1b3");
const r2b1 = document.querySelector("#r2b1");
const r2b2 = document.querySelector("#r2b2");
const r2b3 = document.querySelector("#r2b3");
const r3b1 = document.querySelector("#r3b1");
const r3b2 = document.querySelector("#r3b2");
const r3b3 = document.querySelector("#r3b3");

reset.addEventListener('click',function(){
    r1b1.textContent = "";
    r1b2.textContent = "";
    r1b3.textContent = "";
    r2b1.textContent = "";
    r2b2.textContent = "";
    r2b3.textContent = "";
    r3b1.textContent = "";
    r3b2.textContent = "";
    r3b3.textContent = "";
});