var todo =['buy new turtle'];
var input = prompt("what would you like to do");
 // I did not fully get this


while(input !== "quit"){
  //handle input
  if(input === "list"){
    todo.forEach(function(todo){
      console.log(todo);
    });
    console.log(todo);
  }
  else if (input === "new"){
    //ask for new todo
    var newtodo = prompt("enter a new todo list");
    //add to todos array
    todo.push(newtodo);
  }

  //ask again for new input
  input = prompt("what would you like to do");
}
console.log("ok you quit the app");
