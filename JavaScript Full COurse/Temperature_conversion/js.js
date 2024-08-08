
const textBox = document.getElementById("textBox")
const toCelsius = document.getElementById("toCelsius")
const toFah = document.getElementById("toFah")
const response = document.getElementById("response")

let temp;

function convert(){
    if(toFah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32
        response.textContent = temp +"°F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        response.textContent = temp.toFixed(1) +"°C";
    }
    else{
        response.textContent = "Select a unit"
    }
}