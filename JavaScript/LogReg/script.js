function reg(){
    var fName = prompt("Enter your First Name: ")
    var LName = prompt("Enter your Last Name: ")
    var email = prompt("Enter your email address")
    var password = prompt("Enter Password: ")
    age = prompt("Enter your age: ")
    return fName, LName, age, password, email;
}


function log(email, password){
    var emailLog = prompt("Enter your email address")
    var passwordLog = prompt("Enter Password: ")
    alert(emailLog+" "+passwordLog)

    // if (emailLog === email && passwordLog === password){
    //     alert("Welcome "+fname+" "+LName +"\n You have successfully login ")
    //     console.log("Login Succeeded")
    // }else{
    //     alert("Login details incorrect")
    //     var retry = prompt("Would you like to register or login again?")
    //     if (retry === "register"){
    //         reg()
    //         alert("Now that you have registered, let's log you in.")
    //         log()
    //     }else if (retry === "login"){
    //         log()
    //     }else{
    //         alert("Sorry wrong entry")
    //     }
    // }
    return emailLog, password
}
var fName = fName
var LName = LName
var email = email
var password = password
var emailLog = emailLog
var passwordLog = passwordLog
alert("Welcome to login Page")

var choice = prompt("Would you like to login or register")

if (choice === "login"){
    alert("Okay, you've selected login.Enter you login details in the next pop-up")
    console.log("Login Selected")
    log(email, password)
    if (passwordLog === password && emailLog === email){
        alert("Welcome "+fName+" "+LName +"\nYou have successfully login ")
        console.log("Login Succeeded")
    }else{
        alert("Incorect login details")
        var retry = prompt("Will you like to login again or register?")
        if (retry === "login"){
            log(email, password)
        }else if(retry === "register"){
            reg()
        }else{
            console.log("Wrong entry")
            alert("Error: Wrong Input")
        }
    }
               
}else if(choice === "register"){
    console.log("Registration required")
    reg()
    alert("Now that you have registered, let's log you in.")
    log(email, password)
    if (passwordLog === password && emailLog === email){
        alert("Welcome "+fName+" "+LName +"\nYou have successfully login ")
        console.log("Login Succeeded")
    }else{
        alert("Incorect login details")
        var retry = prompt("Will you like to login again or register?")
        if (retry === "login"){
            log(email, password)
        }else if(retry === "register"){
            reg()
        }else{
            console.log("Wrong entry")
            alert("Error: Wrong Input")
        }
    }
}
else{
    console.log("Great time")
    alert("Wrong entry")
}