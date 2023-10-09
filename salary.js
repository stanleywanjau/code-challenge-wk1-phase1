


const prompt = require('prompt-sync')();
const input = prompt('Input salary: ');
const salary = parseFloat(input);

function calculateNetTax() {// calculates the net tax according to the net salary
  if (salary <= 24000) {
    return salary * 0.1;}
  else if (salary <= 32333) {
    return salary * 0.25;}
  else if (salary <= 500000){
     return salary * 0.3;}
  else if (salary <= 800000){
     return salary * 0.325;}
  else{
     return salary * 0.35;}
}

function calculateNHIF() {//calculates the NHIF according to the salary
  if (salary < 5999){
     return 150;}
  else if (salary <= 7999){
     return 300;}
  else if (salary <= 11999) {
    return 400;}
  else if (salary <= 14999) {
    return 500;}
  else if (salary <= 19999){
     return 600;}
  else if (salary <= 24999){
     return 750;}
  else if (salary <= 29999){
     return 850;}
  else if (salary <= 34999) {
    return 900;}
  else if (salary <= 39999){
     return 950;}
  else if (salary <= 44999){
     return 1000;}
  else if (salary <= 49999){
     return 1100;}
  else if (salary <= 59999){
     return 1200;}
  else if (salary <= 69999) {
    return 1300;}
  else if (salary <= 79000) {
    return 1400;}
  else if (salary <= 89999){
     return 1500;}
  else if (salary <= 99999){
     return 1600;}
  else{
     return 1700;}
}

function calculateNSSF() { //calculates the calculateNSSF and multiplies with the percentage
  return salary * 0.06;
}

const netTaxAmount = calculateNetTax();
const nhifAmount = calculateNHIF();
const nssfAmount = calculateNSSF();
const netIncome = salary - (netTaxAmount + nhifAmount + nssfAmount);//take all the dedaction and remove it from the net salary

console.log("Net tax: " + netTaxAmount);
console.log("NHIF: " + nhifAmount);
console.log("Pension: " + nssfAmount);
console.log("Net Income: " + netIncome);

return netIncome;
