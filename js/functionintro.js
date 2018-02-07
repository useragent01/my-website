// function DoSomething(){
//   stuff happens here
// }

// function sayHi(){
//   alert('hello');
// }
// sayHi();

// var x = prompt("enter a number")
// function square(number){
//   alert(number*number);
// }
// square(x);

// var n = prompt("whats your name")
// function sayHello(){
//   alert("hello " + n);
// }
// sayHello();

// var l = prompt("enter your l");
// var w = prompt("enter your w");
// function area(l, w){
//   alert("your area is " + l*w);
// }
// area(l, w);

// function square(x){
//   return(x*x);
// }
// alert("your " + square(9));


// function capitalize(str){
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// var city = "paris";
// var captial = capitalize(city);
// alert(captial);

// function capitalize(str){
//   if(typeof str === "number"){ //very useful 'typeof variable === "number" ' means it'll only work if its a number
//     return("not a number");
//   }
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// //
// // var city = "paris";
// // var captial = capitalize(city);
// // alert(captial);
// //or
// var num = 9999;
// var captial = capitalize(num);
// alert(captial);


// function decleration:
// function capitalize(str){
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// VS
// function expression:
// var capitalize = function(str){
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var x = prompt("enter a value");
// function isEven(x){
//   if(x%2 === 0){
//     alert("true");
//   }
//   else{
//     alert('false');
//   }
// }
// isEven(x);

// var x = prompt("enter a value");
// function factorial(x){
//   for(var i = x - 1; i >= 1; i-- ){
//     x = x*i;
//     alert(x);
//   }
// }
// factorial(x);


// function factorial(num){
//   for(var i = 1; i <= num; i++){
//     result = num*i;
//   }
//   alert(result);
// }
// factorial(4);

function Snake(str){

  var res = str.replace(/-/g, "_")
  alert(res);
}

Snake("hello-world-dog-----cat");





//
