var entrada = require("readline-sync");
var idades = [];
var soma = 0;
var maior = 0; 
var menor = 1000;

for(var i = 0; i < 5; i++){
 idades[i] = entrada.question(`Digite uma idade: `);
 if(idades[i]>maior){
    maior = idades[i];
 } else if (idades[i]<menor){
    menor = idades[i];
 }
 soma = soma + idades[i];
}

var media = soma/idades.length;

console.log(`Media: ${media}\nMenor: ${menor}\nMaior: ${maior}`)