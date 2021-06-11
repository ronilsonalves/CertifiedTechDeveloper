/* Exercício da lista de compras - Aula 05
utilizando Arrays e suas operações.
 - Ronilson Alves - */

 // Declaração do Array e atribuição dos itens
 let listaCompras = ['Leite','Arroz','Feijão','Carnes','Abobora','Caju','Maracujá']; // Array com 7 posições [0-6]

 // Vamos exibir nossa lista?
/*     Criamos uma função para exibir todos os itens de nossa lista de compras  */
 function exibeLista() {
     console.log("------ LISTA DE COMPRAS ------")
     for (i = 0; i < listaCompras.length; i++) {
         console.log(listaCompras[i]);
     }
     console.log("------------------------------");
     console.log("Total de itens na lista:",listaCompras.length);
     console.log("------------------------------\n"); 
 }

 exibeLista(); // Exibimos nossa lista inicial

/* Vamos adicionar mais itens à nossa lista de compras? */
 console.log("Vamos utilizar o método .push() para adicionar novos itens ao final de nossa lista de compras.\n"+ // Usando push
 "Em seguida, exibiremos a quantidade de itens atual de nossa lista:");

 console.log(listaCompras.push('Carnes','Açúcar','Detergente'),"\n");

 // Vamos ver como nossa lista ficou?
 exibeLista(); // Exibimos nossa lista com as adições feitas

 console.log("Agora, ao invés de .push() vamos adicionar itens à nossa lista com .unshift(). Nesse caso", // Usando unshift
 "nossos novos itens serão adicionados no início de nossa lista [Array] e não no final, mas o retorno dessa função",
 "também será a quantidade de itens em nossa lista:");

 console.log(listaCompras.unshift('Tomate','Farinha de Trigo','Amido de Milho'),"\n");

 // Vamos ver como nossa lista ficou?
 exibeLista(); // Exibimos nossa lista com as adições feitas

/* Agora, removeremos itens de nossa lista de compras */
console.log("Vamos remover itens de nossa lista, a medida que os colocamos no carrinho, primeiro vamos aos", // Usando pop
"produtos de limpeza, removeremos o item Detergente da nossa lista usando o método .pop(), já que ele remove o último item da lista:\n");

let itemRemovido = listaCompras.pop();
console.log(itemRemovido,"foi removido da lista de compras.\nVamos ver como ficou a nossa lista?\n");

 // Vamos ver como nossa lista ficou?
 exibeLista(); // Exibimos nossa lista com as adições feitas

 console.log("Passamos pelo hortifrúti e vamos colocar o Tomate em nosso carrinho, é preciso remover ele da lista",
 "de compras, pra isso usaremos o método .shift(), já que ele é o nosso primeiro item da lista:\n");

 itemRemovido = listaCompras.shift();
 console.log(itemRemovido,"foi removido da lista de compras usando .shift()\nVamos ver como ficou a nossa lista?\n");

 // Vamos ver como nossa lista ficou?
 exibeLista(); // Exibimos nossa lista com as adições feitas

 /* Vamos remover alguns itens da lista conforme andamos pelo mercado, no final, na lista ficará alguns itens que não estavam disponívels */
 for (i=0; i<4; i++) {
     listaCompras.pop();
     listaCompras.shift();
 }

console.log("Por fim, vamos usar o método .join() para exibir os itens não disponíveis (usaremos espaço em branco para exibição em linha única):");

let indisponiveis = listaCompras.join("  ");
console.log(indisponiveis);
