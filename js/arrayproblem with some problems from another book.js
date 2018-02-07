//write a loop that makes seven calls to consle.log to output a triangle


// for(var i = 0; i < 8; i++){
//   console.log("x".repeat(i));
// }
//
// //Write a program that uses console.log to print all the numbers from 1 to 100. For numbers div by 3 print fizz. for numbers div by 5 anmd not 3 print buzz.
// for(var i = 0; i <= 100; i++){
//   if(i%3 == 0){
//     console.log("fizz");
//   }
//   else if(i%5 ==0 && i%3!=0){
//     console.log("buzz");
//   }
//   else{
//     console.log(i);
//   }
// }
//--------------------------------------
//write a program that creates a string that represents an 8x8 grid.
// var i = 0;
// while( i < 8){
//   if(i%2 == 0){
//     console.log("# # # # \n");
//   }
//   else{
//     console.log(" # # # #\n")
//   }
//   i++;
// }
//--------------------------------------
// var ask = prompt("how many grids")
// var i = 0;
// while( i < ask){
//   if(i%2 == 0){
//     console.log("# # # # \n");
//   }
//   else{
//     console.log(" # # # #\n")
//   }
//   i++;
// }
//--------------------------------------
//write a function min that takes aerguments and returns its minimum
// var x = prompt("enter x");
// var x = Number(x);
// var y = prompt("enter y");
// var y = Number(y);
// function min(x, y){
//   if(x > y){
//     console.log("x is bigger than y. The largest is " + x);
//   }
//   else{
//     console.log("x is smaller than y. The largest is " + y);
//   }
// }
// min(x, y);
//--------------------------------------
//define a recursive function isEven corresponding to the description in the book.
// var number = prompt("enter a value");
// var number = Number(number);
//
// function isEven(number){
//   if(number < 0){
//     console.log("try again");
//   }
//   else if(number === 0){
//     console.log("you've entered 0");
//   }
//  else if(number%2 !== 0){
//     console.log("you've entered an odd number");
//     if(number === 1){
//       console.log("you've entered 1");
//     }
//   }
//   else if(number %2 === 0){
//     console.log("its even");
//   }
// }
//
// isEven(number);
//--------------------------------------
// function countBs(str){
//   if(str.charAt(str) === "B"){
//     console.log("you have this many B: " + str.charAt(n));
//   }
//   else if(str.charAt(str) !== "B"){
//     console.log("not many B");
//   }
// }
// countBs("bbBBBBbbbbB");
// var b = "ASDFGHJK"
// console.log(b.charAt(4));
// console.log(b.length);
//--------------------------------------
//first countBs function
// var str = prompt("enter a word");
// function countBs (str) {
// 	//set counter...this is what I was missing. I needed a place to hold the number of times it appears
// 	var bCount = 0;
// 	//iterate through each letter of the string argument
// 	for (var i = 0; i < str.length; i++) {
// 		//if the current string character = 'B', then add 1 to the counter
// 		if (str.charAt(i) === 'B') {
// 			bCount += 1;
// 		}
// 	}
//
// 	//return counter value after iteration
// 	console.log(bCount);
// }
// countBs(str);
//--------------------------------------
//Write a function that behaves like countBs except it takes a second argument that indicartes the charactewr that is to be counted.
// var str = prompt("enter a word");
// var letter = prompt("enter a letter")
//
// function countChar(str, letter){
//   var count = 0;
//   for (var i = 0; i < str.length; i++ ){
//     if(str.charAt(i) === letter){
//       count += 1;
//     }
//   }
//   console.log(count);
// }
//
// countChar(str, letter);
//--------------------------------------
// var word = "Homer";
// var upper = word.toUpperCase();
// var type = typeof(word);
//
// console.log(type);
// console.log(upper);
//--------------------------------------
// var mack = [];
// mack.push("hello", "there", "Mr", "Bond");
// console.log(mack); //prints array as is
// console.log(mack.join(" ")); //prionts out array as a sentence
// console.log(mack.pop(1)); //shows + removes from list
// console.log(mack) //list after affected by .pop(1)

//--------------------------------------
// console.log(typeof(table)); //prints table

// var table = [1,3,5, 7, 10];
// console.log(table[3]);
// console.log(table.length);

//--------------------------------------
// Write a range function that takes two arguments and returns an array containing all the numbers
// var table = [1,3,5, 7, 10];
// function range(x, y){
//   var new1 = table.push(x);
//   var new2 = table.push(y);
//   console.log(table);
// }
// range(10, 11);

//--------------------------------------
// Write a function that adds all the elements in an array
// var table = [1,3,5, 7, 10];
// function sum(){
//   var count = 0;
// for(var i = 0; i < table.length; i++){
//
//   count += table[i]; //this took one value then kept adding it
// }
// console.log(count);
// }
// sum(table);


//--------------------------------------
// Write a function that takes an array as an argument and produces a new array in inverse order
//   var t = ['a', 'b', 'c', 'd'];
//   var count = [];
//   for(var i = t.length-1; i >=0; i--){
//   var y = t[i];
//   count.push(y);
// }
//   console.log(count);

//--------------------------------------
//Write a function that takes two values and returns true only if they are the same value OR are objects with the same properties
// function deepEqual(x, y){
//   if(x === y || typeof(x) === typeof(y)){
//     console.log(true);
//   }
//   else{
//     console.log(false);
//   }
// }
//
// deepEqual(1, "1");

// table = [1, 3, 11];
// var count = 0;
//
// for(var i = 0; i < table.length; i++){
//   count += table[i];
//
// }
// console.log(count);


// function isUniform(arr){
//   var first = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if (arr[i] !== first){
//       return false; //makes it through the whole loop. if the return never happened, then it moves onto return true. If the loop worked, then return false happens and return true never occurs
//     }
//   }
//   return true;
// }


//this finds the max in an array
// function max(array){
//   var first = array[0];
//   for(var i = 1; i < array.length; i++){
//       if(array[i] > first){
//         var first = array[i]
//       }
//     }
//     alert(first);
// }












//
