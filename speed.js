let prompt = require('prompt-sync')();
let input = prompt('enter speed: '); // this where the speed is entered through the terminal
function speed (value){
  let speedLimit =70
  if (value<=speedLimit){
    return ("okay") //the first if function evaluates the value of the speed if the value is below 70 it returns okay
  }else{
    let excess_speed=value-speedLimit;
    let demeritPoints= excess_speed/5;
    if (demeritPoints>12){
      return "License suspended"
    }else{
      return `${demeritPoints}`//the second if evaluates the number of demerit point and if it's great than 12 the license is suspended
    }
    
  }
}

console.log(speed(input))