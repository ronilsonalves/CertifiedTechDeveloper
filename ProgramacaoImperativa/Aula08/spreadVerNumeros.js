/* Exercício Objeto Literais #2 - Aula 08
    -> Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome
    -> Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min()
 - Ronilson Alves - */

/* Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. */
/*  Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números. */
 let numerosPrimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43];
 let numeros = [1,...numerosPrimos,50,51,52,53,54,55,56,57];
 let numerosEnormes = [125,256,512,1024,10240,20480];

 //console.log(numeros); // Exibe o que pede a primeira parte do exercício.

 /* Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). */
 function menorNumero(...argumentos) {
     return Math.min(...argumentos); 
 }
 
 console.log(menorNumero(0,1,2,3,4,6,7));
 console.log(menorNumero(...numerosEnormes));