//print all numnbers between -10 and 19
var num = -10;

while (num < 20){
  alert(num);
  num++
}

//print all numbers between 10 and 40
var even = 10;

while(even <= 40){
  if(even%2==0){
    alert(even);
  }
even++
}

//print all numbers between 300 and 333
var odd = 300;
while(odd <=333){
  if(odd%2 != 0){
    alert(odd);
  }
  odd++;
}

//print all numbers divisible by 5 && 3 between 5 and 50
var num_1 = 5;

while(num_1 <=50){
  if(num_1%5 == 0 && num_1%3 == 0){
    alert(num_1);
  }
  num_1++
}
