var secretNumber = 4;

var guess = prompt("guess a number");
var guess = Number(guess);//this turns strings into numbers

if (guess === secretNumber){
  alert("right");
}
else if(guess !== secretNumber){
  alert("you didnt");
}
