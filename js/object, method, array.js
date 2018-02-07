// var person = ['cindy', 30, 'nh'];
//
// console.log(person[0]) //output cindy
//
// var personA = ['tre', 'LA', 28];
//
// This up here can be confusing. So we can use object
//
// instead of an array, use objects, which store data in key-value pairs
// var person = {
//   name: 'cindy',
//   age: 30,
//   city: 'nh',
// };
// console.log(person.name); //produces cindy. This only woerks with numbers

var person = {
  name: 'tre',
  age: 15,
  city: 'LA'
};
console.log(typeof(person.age));
console.log(typeof(person.city));
person.age += 1;
person.city = "london";




//objects or arrays with objects
// var posts = [
//   {
//     title: "Cats are awesome",
//     author: "santa",
//     comments: ["awesine", "cool"]
//   },
//   {
//     title: "Dogs are awesome",
//     author: "Also santa",
//     comments: ["pies are great", "<3"]
//   }
//   ]
//   //in order to get a value posts[i].title posts 'cats awe some'
//   //posts[i].comments[0] will pull 'awesine'
//   //to call arrayName[i].insideArray


//------
// var someObject = {
//   friends:[
//     {name: "malfoy"}
//     ,{name: "crabbe"}
//     ,{name: "goyle"}
//     ],
//     color: "blue",
//     isEveil: true
// };
// //arrays are called like array[1]
// //objects are claled like object.name

//------
// var movies = [
//   {title: 'bruges', haswatched: true, rating: 4.5},
//   {title: 'frozen', haswatched: false, rating: 5},
//   {title: 'spy kids', haswatched: true, rating: 3},
//   {title: 'mad max', haswatched: false, rating: 5.1}
//   ]

// for(var i = 0; i < movies.length; i++){
//   if(movies[i].haswatched === true){
//     console.log("you have watched " + movies[i].title + " with a rating of " + movies[i].rating)
//   }
//   else if (movies[i].haswatched === false){
//     console.log("you have not watched " + movies[i].title + " with a rating of " + movies[i].rating)
//   }
// }


//---- this is where he tralks about methods, whcih are functions inside an object
//he did some stuff with 'this', which seems like it is a principle of substitution, though it's a bit weird because he looked like he used 'this' so he can print each array element, which for already does

// var obj = {
//   name: 'chick',
//   age: 90,
//   isCool: true,
//   friends: ['bob', 'tina'],

//   add: function(x, y){
//     console.log(x + y);
//   }
// }

// obj.add(5, 6);//this is how you call the function add()
// //this helps keep it organized
// //underscore.js is a website with library of function
// var comments = {};
// comments.data= ['good job', 'lame', 'noice'];
// // console.log(comments.data)
// for( var i = 0; i < comments.data.length; i++){
//   console.log(comments.data[i])
// }
