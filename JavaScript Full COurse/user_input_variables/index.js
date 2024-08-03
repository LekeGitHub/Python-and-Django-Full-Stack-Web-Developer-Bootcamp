let username, age;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("uSname").value;
    age = document.getElementById("playerage").value;
    document.getElementById("myh1").textContent = `Hello ${username} you are ${age} years old`
}