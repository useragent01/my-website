// if: if you are younger than 18, tehn you cannot enter
// else: if you are between 18-21, then you can enter but cannot drink
// elseif: you can enter/drink

// if(age < 18){
//   stuff;
// }
// else if (age< 21){
//   some other stuff
// }//only way this runs is if the first statement is false, so age > 18 && age < 21 is the same as age < 21
// else{
//   some other stuff, with no conditions since the other above it are FALSE
//}
var age = Number(prompt("enter your age"));
if(age === 21){
  alert("happy 21st birthday");
}
if(age%2!=0){
  alert("odd age");
}
else{
  alert("even age");
}

if(age % Math.sqrt(age) == 0){
  alert("perfect");
}
else{
  alert("not perfect");
}
