// alert("javascript attached")

var name = "Raj";

var num1 = 89;
var num2 = 20;

var sports =  ["football", "basketball", "cricket"];

console.log(sports[1]);


var sum = num1 + num2

console.log(sum);

function fullName () {
var firstName = "Rajeev";
var lastName = "Baniya";
var fullName = firstName + lastName;

console.log("My name is " + fullName);

}

fullName();

if (name == "Rajeev") {
    console.log("full name is Rajeev Baniya")
} else {
    console.log("I dont know your name")
}

var change = document.getElementById("change");

function changeName () {
    change.innerHTML = "The text is changed"
}

var theBody = document.getElementById("body");

function darkTheme () {
    theBody.style.backgroundColor = "black";
    theBody.style.color = "white"
}

function lightTheme () {
    theBody.style.backgroundColor = "white";
    theBody.style.color = "black"
}





