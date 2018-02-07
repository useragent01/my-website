//
// var ask = prompt("are we there yet?");
//
// while(ask != "yes" && ask != "yea"){
//   var ask = prompt("are we there yet?");
// }
// if(ask == "yes" || ask == "yea"){
//   alert("youre here");
// }
// var str = "hello world";
// var a = str.indexOf("ld"); //what this does is it outputs where the letter starts
// alert(a);


var answer = prompt("we there yet?");

while(answer.indexOf("yes") === -1){ //this -1 means that the word 'yes' did not get typed in
  var answer = prompt("we there yet?");
}
if(answer.indexOf("yes") !== -1){
  alert("you here");
}
