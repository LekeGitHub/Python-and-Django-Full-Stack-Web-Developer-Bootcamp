const nameUsr = document.getElementById("input1")
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const myText = document.getElementById("myText")
let age, uname;

submitBtn.onclick = function(){
    uname = nameUsr.value;
    age = myText.value
    age = Number(age)
    console.log(age)
    
    if(age >= 100){
        message.textContent = "Sorry ${uname}, You are too old to enter this site";
    }   
    else if(age >= 18 && age < 100){
        message.textContent = "Hello "+ uname+ ", You can enter this site";
    }else{
        message.textContent = "Sorry "+ uname+ ", You are below 18, so can't enter this site";
    }
}
