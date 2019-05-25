var i = 0;
var j = "";
for(i = 0 ; i < 6; i++){

    j += "#";
    console.log(j);
}
//alert("Hello", "Good Evening", "How do you do?");

function multiplier(factor) {
        factor *= 5;
    return function(number) {
      return number * factor;
    };
  }
  
  var twice = multiplier(2);
  console.log(twice(5));
  console.log(twice(10));
  console.log(twice(100));
   
var arrayNumeros = [0,1,2,3,4,5,6,6,6];

var elemento = function compara(number){
    return number === 6;
}
var ocorrencias = arrayNumeros.filter(elemento);
console.log(ocorrencias);

var ocorrencias = arrayNumeros.filter(function compara(number){
    return number === 6;});
console.log(ocorrencias);


var objeto = {};

objeto.exibe = function(string, numeros){
        tipo: this.numeros = numeros;
        console.log(string + this.numeros);
};

objeto.exibe("Olá eu sou um objeto ", 1000);

function promptNumber(question) {
    var result = Number(prompt(question, ""));

    if (isNaN(result))
        return null;
    else
        return result;
}

console.log(promptNumber("How many trees do you see?"));

console.log(prompt("Digite um valor"));

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left")
      return "L";
  if (result.toLowerCase() == "right")
      return "R";

  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L")
      return "a house";
  else
      return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

