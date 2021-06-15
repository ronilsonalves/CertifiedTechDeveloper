/* Exercício Arrays - Aula 06 - Prática do Aluno do conteúdo disponibilizado no PG
    -> Exercícios com Loops - Aula Síncrona 15/06/2021 (Ao vivo)
 - Ronilson Alves - */

 // 1. Percorra o array abaixo e exiba seus elementos:
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

/* for (let i=0; i<pontos.length; i++) {
    console.log(pontos[i])
} */

// 2. Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:
/* let diversos = [1,2,"Que?",43,"dia",45,"sábado"];

for (let i=0; i<diversos.length; i++) {
    diversos[i] = Math.random().toFixed(2);
    console.log(diversos[i]);
} */

// 3. Crie outro array, percorra-o, altere-o e exiba seus elementos:
let outroArray = ["valores","para","realizar","alteração"];

function percorrerOutroArray (umArrayQualquer) { // uma função pra percorrer - basicamente exibe os valores do array antes das modificações - fiz desnecessáriamente.
    for (let i=0; i<umArrayQualquer.length; i++) {
        console.log(umArrayQualquer[i]);
    }
}

function alteraOutroArray (umArrayQualquer) { // Realiza as alterações no Array
    for (let i=0; i<umArrayQualquer.length; i++){
        umArrayQualquer[i]= "Alteração: " + (i+1);
    }
}

function exibeOutroArray(umArrayQualquer) { // Exibe o array
    for (let i=0; i<umArrayQualquer.length; i++) {
        console.log(umArrayQualquer[i]);
    }
}

//percorrerOutroArray(outroArray);
//alteraOutroArray(outroArray);
//exibeOutroArray(outroArray);

// 4. Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:

let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"];

exibeOutroArray(alfabeto);

function alterarUltimoArray(umArrayQualquer) {
    let arrayAuxiliar = [];
    for (let i=0; i<umArrayQualquer.length; i++) {
        if (umArrayQualquer[i] == "A" || umArrayQualquer[i] == "E" || umArrayQualquer[i] == "I" || umArrayQualquer[i] == "O" || umArrayQualquer[i] == "U") {
            arrayAuxiliar.push(umArrayQualquer[i]); // Aqui, ao invés de alterar o array alfabeto, decidiu-se mantêlo intácto e respeitando as condições
        }                                           // adicionar algumas letras ao array de vogais, criando um novo array.
    }
    //exibeOutroArray(arrayAuxiliar);
    return arrayAuxiliar; 
}

let vogais = alterarUltimoArray(alfabeto);
exibeOutroArray(vogais); 


/* Exercícios Extras (estão comentados) */
// 1. Escrever um programa que imprime 25 termos da série 11 - 22 - 33 - 44, etc. 
/* let seriede25 = [];
 
for (let i=1; i<=25; i++) {
    seriede25.push((i*11));
}

seriede25 = seriede25.join(" - ");
console.log(seriede25)

// 2. Mostrar múltiplos de 8 até o valor 500. A tela deve mostrar 8 - 16 - 24;
let multiplosde8 = []; 

for (let i=1; i<=500; i++) { 
    if (i%8==0) { 
        multiplosde8.push((i)); 
    }
}

multiplosde8 = multiplosde8.join(" - "); 
console.log(multiplosde8); 

// 3. Usando o FOR, desenvolver um programa que mostre a tabuada de 5

function mostrarTabuada5() {
    let aux = 5;

    console.log("============== TABUADA DO 5 (ADIÇÃO)==============");
    for (let i=1; i<=10; i++) {
        console.log("   5  +   ",i,"  =                ",aux+i);
    }

    console.log("============== TABUADA DO 5 (SUBTRAÇÃO)==============")
    for (let i=1; i<=10; i++) {
        console.log("   5   -   ",i,"   =               ",aux-i);
    }

    console.log("============== TABUADA DO 5 (MULTIPLICAÇÃO)==============")
    for (let i=1; i<=10; i++) {
        console.log("   5   X   ",i,"   =               ",aux*i);
    }

    console.log("============== TABUADA DO 5 (DIVISAO)==============")
    for (let i=5; i<=50; i++) {
        if (i%5==0) {
            console.log("   ",i,"    /   ",aux,"   =               ",i/aux);
        }
    }
}

mostrarTabuada5(); */