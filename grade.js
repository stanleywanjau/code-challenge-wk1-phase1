
let prompt = require('prompt-sync')();
let input = prompt('enter your number: ');// this is where the grades are entered
function grade(number){
  if (number<40){
  return "E"
}else if(number>=40 && number<49){
  return "D"
}else if (number >=49&& number<59 ){
  return "C"
}else if(number>=60 && number<79){
  return "B"
}else if (number>=79 && number<=100){
  return "A"
}else if (number >100){
  return "entry invalid"
}//the if function evalutes the marks of the student and assign it a grade accordingly 
} 
console.log(grade(input))
