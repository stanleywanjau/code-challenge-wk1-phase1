
let prompt = require('prompt-sync')();
let input = prompt('enter your number: ');
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
}
} 
console.log(grade(input))
