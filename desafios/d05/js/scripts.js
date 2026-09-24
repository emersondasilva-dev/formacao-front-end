// ========== Repetições em JavaScript - Level 3 ==========

// Questão 01: Crie uma função contarAte(numero) que mostre no console os números de 1 até o número informado.

// const numero = Number(prompt("Digite um número: "));

// function contarAte(numero) {
//     for (let i = 1; i <= numero; i++) {
//         console.log(i);
//     }
// }

// contarAte(numero);

// Questão 02: Crie uma função contagemRegressiva(numero) que conte até 0.

// const numeroRegressivo = Number(prompt("Digite um número para contagem regressiva: "));

// function contagemRegressiva(numero) {
//     for (let i = numero; i >= 0; i--) {
//         console.log(i);
//     }
// }

// contagemRegressiva(numeroRegressivo);

// Questão 03: Crie uma função somarAte(numero) que retorne a soma de todos os números de 1 até o número informado.

// const numero = Number(prompt("Digite um número para somar até ele: "));

// function somarAte(numero) {
//     let soma = 0;
//     for (let i = 1; i <= numero; i++) {
//         soma += i;
//     }
//     return soma;
// }

// console.log(somarAte(numero));

// Questão 04: Crie uma função tabuada(numero) que mostre a tabuada de 1 a 10.

// const numero = Number(prompt("Digite um número: "));

// function tabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
// }

// tabuada(numero);

// Questão 05: Crie uma função mostrarPares(numero) que mostre todos os números pares de 0 até o número informado.

const numero = Number(prompt("Digite um número: "));

function mostrarPares(numero) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

mostrarPares(numero);