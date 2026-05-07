// PPI - 2026
// ALUNO: Emmily Vitória
// Ativar o formatador, atalho: Alt + Shift + F

// Aula 06/05 - Introdução a JavaScript

console.log('Bem-vindos a PPI');


// Variáveis
let nome = 'Emmily';
let idade = 18;
let altura = 1.75;
let estudante = true;

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Altura:', altura);
console.log('Estudante:', estudante);

// Constantes não podem mudar de valor
const PI = 3.14;
console.log('Valor de PI:', PI);

// Operadores Aritméticos + - / * ** %
let x = 5 + 5; // soma
let y = '5' + '5'; // concatenação de strings
let z = 'Hello' + 5; // concatenação de string e número

console.log('Soma:');
console.log('x:', x);
console.log('y:', y);
console.log('z:', z);

console.log(typeof x)

// Operadores relacionais > < >= <= == != === !==
console.log('5' == 5); // true, comparação de valor
console.log('5' === 5); // false, comparação de valor e tipo
console.log('5' != 5); // false, comparação de valor
console.log('5' !== 5); // true, comparação de valor e tipo

// Operadores de incremento
x = x++;
console.log(x);

x = ++x;
console.log(x);

// ++x; operador unário de conversão para número
// x += 1;
// x = x + 1;

// Operadores lógicos && ||(AND) !(NOT) E (OR)
let expressao1 = true && 5+2*3 < 10 || false; // true
console.log(expressao1);
//

// // if...else
//     if (condition) {
        
//     } else {
        
//     }

// Template Strings
let text =
`React é tudo de bom
programar é minha vida
eu amo javascript`;
console.log(text);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Arrays
let frutas = ['maçã', 'banana', 'laranja', 'manga'];

console.log(frutas.length); // Tamanho do array

console.log(frutas[0]); // Acessar o primeiro elemento
console.log(frutas[1]); // Acessar o segundo elemento
console.log(frutas[2]); // Acessar o terceiro elemento
console.log(frutas[3]); // Acessar o quarto elemento

frutas.push('Kiwi'); // Adicionar um elemento ao final do array
console.log(frutas);

console.log(frutas.pop()); // Remove o último elemento do array
console.log(frutas);

console.log(frutas.shift()); // Remove o primeiro elemento do array
console.log(frutas);

frutas.unshift('Limão'); // Adiciona um elemento no início do array
console.log(frutas);

// Argumento 1 - posição onde o elemento será adicionado
// Argumento 2 - número de elementos a serem removidos a partir da posição
// Argumento 3 - elemento a ser adicionado  
frutas.splice(2, 0, 'Kiwi'); // Adiciona um elemento na posição 2 sem remover nenhum elemento
console.log(frutas);

frutas.splice(2, 1);
console.log (frutas);

// Desafio - substituit ´maçã´ por ´Kiwi´
frutas.splice(3, 1, `Kiwi`);
console.log(frutas);

// Busca índice do elemento `maçã`
let index = frutas.indexOf (`maçã`)
console.log(index);

// Ordem Crescente
frutas.sort(); //toSorted ()
console.log(frutas);

// Ordem decescente
frutas.reverse();
console.log(frutas);

//Não altera o ARRAY original
let frutasOrdenadas = frutas.toSorted();
console.log(frutas);
console.log(frutasOrdenadas);

let frutasReversas = frutas.toReversed();
console.log(frutas);
console.log(frutasReversas);

const numeros = [45, 4, 9, 16, 25];
console.log(numeros);

// Desafio - Criar um array 'numeros2' que dupliquem os valores de 'numeros' usando for
// O  output: [90, 8, 18, 32, 50]
const numeros2 = [];
for (let i = 0; i < numeros.length; i++) {
    numeros2.push = numeros[i]*2;
    
}
console.log(numeros);
console.log(numeros2);

function myFunction(value, index, array) {
    return value * 2;
}

const numerosMap = numeros.map (myFunction);
console.log(numerosMap);

console.log(numeros.map( (numero) => numero * 2));

console.log (numeros.toSorted((a, b) => a - b)); //C
console.log (numeros.toSorted((a, b) => b - a)); //D

// Maior valor
console.log (`Maior =`, numeros[numeros.length-1]); 
// Menor valor 
console.log (`Menor =`, numeros [0] ); 