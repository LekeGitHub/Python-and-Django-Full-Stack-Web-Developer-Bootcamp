function hello(name){
    console.log("Hello "+ name);
}

function addNum(n1, n2){
    console.log(n1+n2);
}

function helloSomeone(name="Frankie"){
    console.log("Hello "+name);
}

function formal(name="Sam", title="Sir"){
    return title + " " +name
}

function timesfive(numInput) {
    var result = numInput * 5
    return result
}


var v = "Global V"
var stuff = "Global Stuff"

function fun(stuff) {
    console.log(v);
    stuff = "Reassign stuff in func"
    console.log(stuff);
}


fun()
console.log(stuff)

