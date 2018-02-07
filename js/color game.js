


// var colors = ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)", "rgb(255, 0, 255)"];
var numsquares = 6;
var colors = generaterandomcolors(numsquares); //generate 6 random colors
var squares = document.querySelectorAll(".square");
var pickedcolor = PickedColor()
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected")//adds .selected with rotations
  easyBtn.classList.add("selected")
    var numsquares = 3;
    //generate all new colors
    colors = generaterandomcolors(numsquares);
    //pick a new random color from array
    pickedcolor = PickedColor();
    //change colorDisplay to match picked color
    colordisplay.textContent = pickedcolor
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
      }else{
        squares[i].style.display = "none";
      }

    }
})

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  colors = generaterandomcolors(numsquares);
  pickedcolor = PickedColor();
  colordisplay.textContent=pickedcolor
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
})


resetButton.addEventListener("click", function(){

  //generate all new colors
  colors = generaterandomcolors(numsquares);
  //pick a new random color from array
  pickedcolor = PickedColor();
  //change colorDisplay to match picked color
  colordisplay.textContent = pickedcolor
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  }
  resetButton.textContent = "New COlors"
  h1.style.backgroundColor = "steelblue"
    message.textContent = ""
})

for(var i = 0; i < squares.length; i++){
  //adding colors to square
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    //this.style.backgroundColor grabs RGB number this = squares[i]
    var clickedcolor = this.style.backgroundColor
    // then compare color to pickedcolor
    if(clickedcolor === pickedcolor){

      message.textContent = "Correct"
      resetButton.textContent = "play again?"
      //a seperate function that will change all colors to the correct one after click
      changecolors(clickedcolor);
      h1.style.backgroundColor = clickedcolor;
    }
    else{
      //this will turn squares[i] = this turn into the backgroundColor
      this.style.backgroundColor = "#232323"
      message.textContent = "Try Again"
    }
  });
};

var colordisplay = document.getElementById("colorDisplay")

colordisplay.textContent = pickedcolor;
//click event - click on a square, then run some codes

function changecolors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  //change each color to match given color
}

function PickedColor(){
  //picks random number; .floor is a step function; .random generates between 0-1; *colors.length ensures output 0-6
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generaterandomcolors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    //put randomcolor() here
    arr.push(randomcolor())
  }
  //return that array
  return arr;
};

function randomcolor(){
  // pick red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
