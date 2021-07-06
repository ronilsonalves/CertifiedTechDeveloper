/* Exercício Métodas de Arrays Avançados #1 - Aula 12
 - Ronilson Alves - */

/* 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares. */
let numerosPares = [2, 4, 6, 8, 10]

let numImpares = numerosPares.map(function(numero) {
    return (numero-1);
})

console.log(numImpares);

/* 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria. */
let nomes = ["Ana","Bruna","Isis","Juliane","Maria","Maria","Napoleão","Pedro","Ronilson","Vera"];

let marias = nomes.filter(function(asMarias){
    return asMarias === "Maria";
});

console.log(marias);

/* 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados. */
let reduzir = [1,2,3,4,5,6,7];

let arrayParaString = reduzir.reduce (function(acumulador,numero) {
    let arrayAux = [];
    arrayAux.push(acumulador,numero);
    return arrayAux.join(" - ");
});

console.log(arrayParaString);

/* 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”. */
let animais = ["Arara","Burro","Cachorro","Ema","Furão","Gambá","Macaco","Rinoeceronte","Zebra"];

animais.forEach(function(animal){
    console.log("O animal é a(o)",animal);
});