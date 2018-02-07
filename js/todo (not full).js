var lis = document.querySelectorAll("li");

//need a for loop so we can select addEventListener to all li
for(var i =0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){

    // this.style.color = "green" //this is basically lis[i]
    this.classList.add("selected")//this is the same as the line above
  });

  lis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  })

  lis[i].addEventListener("click", function(){
    this.classList.toggle("done")//adds class .done
  })
}

//use both so we don't have the first one being the only thing that works
