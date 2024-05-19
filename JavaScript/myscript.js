// alert("Welcome to your bank");

// var deposite = prompt("How much will you like to deposite today? ")

// alert("You've deposited: "+deposite)

// console.log("You are a cool person!");

function hello(name){
    console.log("Hello "+name)
}

// Addition 
function addNum(n1,n2){
    console.log(n1+n2);
}

// Default Parameters in function
function greetUser(name="Leke"){
    console.log("Hello "+name);
}

// Returning input out of function and asigning it to a variable outside the fuction
function formal(title="Sir", name='Sam'){
    return title + " " + name;
}