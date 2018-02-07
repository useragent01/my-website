//select
var tag = document.getElementById("highlight");

//manipulate
tag.style.color = "blue";//this must be a string
tag.style.border = "10px solid red";
tag.style.fontsize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//example
var h1 = document.querySelector("h1") //selected

h1.style.color = "yellow" //changed var h1

h1.style.border = "5px solid purple" //changed var h1
//typically changes behavior; for example, adding a setInterval(function(), )

One way to change multiple parts in HTML.

//define a .CLASS in CLASS
.classInCss{
  color: blue;
  border: 1px solid black;
}
//in JS
var tag = document.getElementById(".highlight");
tag.classList.add(".classInCss")//var.classList.add("CLASS from css")
tag.classList.remove(".classInCss")//removes the effects from class
tag.classList.toggle(".classInCss")//if given element has the class, then it removes it; if it doesn't, then it has it

//example
par.classList.add("big") //applies css effects .big

par.classList.remove("big") //removes css effects

par.classList.toggle("big")


//textContent
var tag = document.querySelector("p");
tag.textContent //Corgi mixes are adorable
tag.textContent = "blah blah blah" //replaces "corgi mixes are adorable"

//innerHTML is similiar to textContent except it returns a string of all the HTML contained in a given element
var tag = document.getElementsByTagName("P")[0]

tag.innerHTML // graphs Corgi mixes are <strong>adorable</strong>
//example
var p = document.querySelector("p")
var ul = document.querySelector("ul")
p.textContent//gets corgi comment
p.innerHTML//gets corgi comment with <strong>
ul.innerHTML
p.innerHTML = "hello <strong>friend</strong>"













//
