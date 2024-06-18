var std_names = []
var option = ""
var name = ""

function add(){
    var name_add = prompt("Please enter a name to be added: ")
    std_names.push(name_add)
}

function remove(){
    var rem_name = prompt("What name would like to remove? ")
    var index = std_names.indexOf(rem_name)
    std_names.splice(index,1)
}

function display(){
    console.log(std_names)
}

var startwebapp = prompt("Will you like to start the webapp?\n Reply with 'y' as YES and 'n' as No")

if (startwebapp === 'y'){

    while(startwebapp = "y"){
        option = prompt("Please select and action, add, remove, display or quit")
        if (option === "add"){
            add();
        }else if(option == "remove"){
            remove();
        }else if (option == "display"){
            display();
        }else if (option == "quit"){
            quit();
        }
    }
}
alert("Thanks for using the webapp, goodby")
