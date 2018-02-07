
//----- DOM maniputation. NEED TO PUT <SCRIPT SRC = "./JS/FILE.JS" ABOVE </BODY> IN HTML

//DOM = document object model. The "defining DOM" video shows something cool about console.dir(document)
//SELECTING PROCESS
// var h1 = document.querySelector("h1")//this selected My Header whcih saves it as a variable
// //MANIPUALATING PROCESS
// h1.style.color = "pink";

// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
//   if(isBlue){
//     body.style.background = "white";
//   }
//   else{
//     body.style.background = "#3498db";
//   }
//   isBlue = !isBlue; //this just changes Boolean value
// },1000)


// in console, we can use the following which produces more information:
// document.body for the entire HTML BODY
// document.links for the entire links
// document.head for the entire HTML <head>
//
// In order to selecting methods, the 5 are going to be used:
// document.getElementById()
// document.getElementsByClassName() //takes a string argument and returns a list of elements that have CLASS
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
//
// var tag = document.getElementById('highlight') //graphs DIV ID
// var tags = document.getElementsByClassName("bolded");
// var tags = document.getElementsByTagName("li"); //graphs every element with li
//
// var tag = document.querySelector("#highlight"); //returns the first element that matches a given CSS selector
// var tag = document.querySelector(".bolded") //this selects only ONE class = "bolded"
//
// var tag = document.querySelectorAll(".bolded") //this selects only ALL class = "bolded"

//come up with 4 ways to select 1st <p>

var select1 = document.getElementById("first");//ID grabbed

var select2 = document.querySelector("#first"); //first ID grabbed

var select5 = document.querySelector(".special"); //first CLASS grabbed

var select3 = document.querySelectorAll("#first"); //All ID grabbed

// var select4 = document.querySelectorAll("p #first") //gibberish
console.log(select1);


document.getElementsByClassName("special")[0]//only grabs the first <P> from 3<P>
document.querySelectorAll(".special")[0]
document.getElementsByTagName("p")[0]
document.querySelector("p")//only first <p>
document.querySelectorAll("p")[0]
















//
