//Restart Button
const reset = document.querySelector("#reset");

// Grab all squares
const squares = document.querySelectorAll("td");

// clear squares
function clearSquares(){
    for(let i = 0; i < squares.length; i++){
        squares[i].textContent = "";
    }    
}
reset.addEventListener('click', clearSquares)

// add x to squares

function changeMarker(){
    if(this.textContent === ""){
        this.textContent = "X";
    }else if(this.textContent === "X"){
        this.textContent = "O";
    }else{
        this.textContent = "";
    }
}

for(i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', changeMarker)
}