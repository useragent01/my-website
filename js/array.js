array is a way of holding information

variables only hold a small amount of information
array holds a lot of information
var ArrayName = [stuff goes here];
in order to get the array data, we write it like this
var ArrayName = [stuff goes here];
console.log(ArrayName[i]) where i represents the location of the data in array

in order to replace the data, we can replace it by
ArrayName[i] = replacedinformation

in order to add data to an array, we write it
ArrayName[i+1] = newinformation

built in array feature,
ArrayName.length tells us how many elements are in array

in order to initalize an empty array, we can do:
var ArrayName = [];
or
var ArrayName = new Array(){
}

Some built-in methods for array can be found in MDN Mozilla
var ArrayName = [stuff];
ArrayName.push = [new stuff] is whats used to add something to the end of the ArrayName
ArrayName.pop() will remove the last element in the ArrayName
ArrayName.unshift("new stuff") will add to the front to the ArrayName
ArrayName.shift() will remove the first element
ArrayName.indexOf("what you're looking for"); will find the first index location of ArrayName. If its not in the ArrayName, then itll return -1
var ArrayName = [stuff in here]
var NewArrayName = ArrayName.slice(1, 5) is used to copy part of an Array
