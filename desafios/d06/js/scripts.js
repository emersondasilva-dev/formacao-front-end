// ========== Começando a pensar de verdade - Level 4 ==========

// Questão 01: Crie uma função contarDivisores(numero) que conte quantos divisores o número possui.

// const numero = Number(prompt("Digite um número: "));

// function contarDivisores(numero) {
//     let contador = 0;

//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(`Total de números divisores de ${numero}: ${contarDivisores(numero)}`);

// Questão 02: Crie uma função ehPrimo(numero) que retorne true se o número for primo e false caso contrário.

// const numero = Number(prompt("Digite um número para fazer a verificação: "));

// function ehPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }

//     for(let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(ehPrimo(numero));

// Questão 03: Crie uma função fatorial(numero).

// const numero = Number(prompt("Digite um número para calcular seu fatorial: "));

// function fatorial(numero) {
//     if (numero < 0) {
//         return "Fatorial não definido para números negativos";
//     }

//     let resultado = 1;

//     for (let i = numero; i >= 1; i--) {
//         resultado *= i;
//     }

//     return resultado;
// }

// console.log(`Fatorial de ${numero}: ${fatorial(numero)}`);

// Questão 04: Crie uma função somarPares(numero) que retorne a soma de todos os números pares de 0 até o número informado.

// const numero = Number(prompt("Digite um número para realizar a soma: "));

// function somarPares(numero) {
//     if (numero < 0) {
//         return "Soma não definida para números negativos";
//     }

//     let resultado = 0;

//     for (let i = 0; i <= numero; i++) {
//         if (i % 2 === 0) {
//             resultado += i;
//         }
//     }

//     return resultado;
// }

// console.log(`Resultado: ${somarPares(numero)}`);

// Questão 05: Crie uma função fibonacci(n) que mostre os primeiros n termos da sequência:

const n = Number(prompt("Digite um número para iniciar a sequência: "));

function fibonacci(n) {
    let anterior = 0;
    let atual = 1;

    if (n === 0) {
        return 0;
    }

    console.log(anterior);
    console.log(atual);

    for (let i = 2; i <= n; i++) {
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;

        console.log(atual);
    }
}

fibonacci(n);