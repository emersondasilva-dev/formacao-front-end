// ========== Fundamentos de JavaScript - Level 1 ==========

// Questão 01: Crie uma função verificarParidade(numero) que receba um número e retorne "Par" ou "Ímpar".

// const numero = Number(prompt("Digite um número: "));

// function verificarParidade(numero) {
//     if (numero % 2 === 0) {
//         return "Par";
//     } else {
//         return "Ímpar";
//     }
// }

// console.log(verificarParidade(numero));

// Questão 02: Crie uma função maiorNumero(a, b) que retorne o maior entre os dois números.

// const a = Number(prompt("Digite o primeiro número: "));
// const b = Number(prompt("Digite o segundo número: "));

// function maiorNumero(a, b) {
//     if (a > b) {
//         return a;
//     } else if (a === b) {
//         return "Os números são iguais."; 
//     } else {
//         return b;
//     }
// }

// console.log(maiorNumero(a, b));

// Questão 03: Crie uma função verificarNumero(numero) que retorne:

// -> "Positivo"
// -> "Negativo"
// -> "Zero"

// const numero = Number(prompt("Digite um número: "));

// function verificarNumero(numero) {
//     if (numero > 0) {
//         return "Positivo";
//     } else if (numero < 0) {
//         return "Negativo";
//     } else {
//         return "Zero";
//     }
// }

// console.log(verificarNumero(numero));

// Questão 04: Crie uma função calcularMedia(n1, n2, n3) que retorne a média de três notas.

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    return media;
}

console.log("A média das notas é: " + calcularMedia(nota1, nota2, nota3));

// Questão 05: Crie uma função calcularDesconto(preco, percentual) que receba o preço de um produto e o percentual de desconto e retorne o preço final.

const preco = Number(prompt("Digite o preço do produto: "));
const percentual = Number(prompt("Digite o percentual de desconto: "));

function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    const precoFinal = preco - desconto;
    return precoFinal;
}

console.log("O preço final com desconto é: " + calcularDesconto(preco, percentual));