/* Exercício Objeto Literais #1 - Aula 08
    -> Crie uma função construtora chamada Restaurante
 - Ronilson Alves - */

 function Restaurante (nome, cardapio) {
     this.nome = nome;
     this.cardapio = cardapio;
     this.entrada = function () {
         return console.log("Olá, desejamos boas-vindas ao",this.nome,'\nEsse é o nosso cardápio:\n',this.cardapio.join(" - "));
     }
 };

 let novoRestaurante = new Restaurante ('Sabor do Maranhão',['Arroz de cuxá','Baião de 2','Pescada Amarela','Bobó de Camarão']);

 novoRestaurante.entrada();