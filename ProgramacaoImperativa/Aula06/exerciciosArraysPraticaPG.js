/* Exercício Arrays - Aula 05 - Prática do Aluno do conteúdo disponibilizado no PG
    -> Arrays Básicos - Aula Síncrona (Ao vivo)
 - Ronilson Alves - */

// 1. Criar um arquivo arrays.js (o Aluno optou por utilizar exerciciosArraysPraticaPG.js)
let filmes = ["Star Wars", "Clube da Luta","O Poderoso Chefão","Top Gun","Interestellar"];
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

//console.log(filmes[1]); // Veficando se tudo ocorreu bem solicitando o segundo elemento

// 2. No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando .toUpperCase() para cada elemento
for (let i=0; i<filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase();
}
//console.log(filmes);

// 3. Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados.
// 4. No mesmo arquivo, crie este array e uma função que adiciona cada elemento no array de desenhos animados ao array filmes.
// 5. Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array de 
// desenhos animados (cartoons) antes de passá-los para filmes.
cartoons.pop();

function adicionarAFilmes () {
    for (let i=0; i<cartoons.length; i++) {
        filmes.push(cartoons[i].toUpperCase());
    }
}

adicionarAFilmes();
//console.log(filmes); // Mostrar o array filmes com as inserções dos elementos em cartoons

// 6. Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

function compararNotas() {
    for (let i=0; i<8; i++) {
        if (asiaScores[i] == euroScores[i]) {
            console.log("Nota",i+1,"é igual em ambas avaliações.");
        } else {
            console.log("A nota",i+1,"é diferente nas avaliações");
        }
    }
}

compararNotas();