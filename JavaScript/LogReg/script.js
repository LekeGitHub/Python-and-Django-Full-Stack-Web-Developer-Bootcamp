alert("Welcome to login Page")

var choice = prompt("Would you like to login or register")

if (choice === "login"){
    alert("Okay, you've selected login.Enter you login details in the next pop-up")
    console.log("Login Selected")
    username = prompt("Enter your username: ")
    password = prompt("Enter your Password: ")
}else if(choice === "register"){
    console.log("Registration required")
    alert("Okay, you've selected login. Enter you login details in the next pop-up")
}
else{
    console.log("Great time")
    alert("Wrong entry")
}