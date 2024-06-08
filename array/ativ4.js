entrada = require("readline-sync");

var nomes = ["Júlia", "Jackeline", "Emerson", "João", "Júnior"]
var idades = [17, 46, 50, 22, 44]
for(var i = 0; i < 5; i++){
console.log("O usuário é: " + nomes[i], "tem", idades[i], "anos" );
}