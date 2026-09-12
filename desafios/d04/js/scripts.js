// ========== Condições e Funções em JavaScript - Level 2 ==========

// Questão 01: Crie uma função maiorDeTres(a, b, c) que retorne o maior número.

const a = Number(prompt("Digite o primeiro número: "));
const b = Number(prompt("Digite o segundo número: "));
const c = Number(prompt("Digite o terceiro número: "));

function maiorDeTres(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(`O maior número é: ${maiorDeTres(a, b, c)}`);

// Questão 02: Crie uma função verificarAprovacao(nota):

// - nota ≥ 7 → "Aprovado"
// - nota ≥ 5 e < 7 → "Recuperação"
// - nota < 5 → "Reprovado"

// const nota = Number(prompt("Digite a nota do aluno: "));

// function verificarAprovacao(nota) {
//     if (nota >= 7) {
//         return "Aprovado";
//     } else if (nota >= 5 && nota < 7) {
//         return "Recuperação";
//     } else {
//         return "Reprovado";
//     }
// }

// console.log(`O aluno está: ${verificarAprovacao(nota)}`);

// Questão 03: Crie uma função calcularIMC(peso, altura) e retorne a classificação:

// - abaixo de 18.5 → "Abaixo do peso"
// - 18.5 até 24.9 → "Peso normal"
// - 25 até 29.9 → "Sobrepeso"
// - 30 ou mais → "Obesidade"

// const peso = Number(prompt("Digite o peso em kg: "));
// const altura = Number(prompt("Digite a altura em metros: "));

// function calcularIMC(peso, altura) {
//     const imc = peso / (altura * altura);

//     switch (true) {
//         case imc < 18.5:
//             return "Abaixo do peso";
//         case imc >= 18.5 && imc <= 24.9:
//             return "Peso normal";
//         case imc >= 25 && imc <= 29.9:
//             return "Sobrepeso";
//         case imc >= 30:
//             return "Obesidade";
//         default:
//             return "Valor inválido";
//     }
// }

// console.log(`O IMC é: ${calcularIMC(peso, altura)}`);

// Questão 04: Crie uma função ehBissexto(ano) que retorne true ou false.

// function ehBissexto(ano) {
//     if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const ano = Number(prompt("Digite um ano: "));
// console.log(`O ano ${ano} é bissexto? ${ehBissexto(ano)}`);

// Questão 05: Crie uma função calcular(a, b, operador):

// Ela deve aceitar: 

// + 
// -
// *
// /

// const a = Number(prompt("Digite o primeiro número: "));
// const b = Number(prompt("Digite o segundo número: "));
// const operador = prompt("Digite o operador (+, -, *, /): ");

// function calcular(a, b, operador) {
//     switch (operador) {
//         case "+":
//             return a + b;
//             break;
//         case "-":
//             return a - b;
//             break;
//         case "*":
//             return a * b;
//             break;
//         case "/":
//             if (b !== 0) {
//                 return a / b;
//             } else {
//                 return "Erro: Divisão por zero não é permitida.";
//             }
//         break;
//         default:
//             return "Operador inválido.";
//     }
// }

// console.log(`O resultado da operação é: ${calcular(a, b, operador)}`);