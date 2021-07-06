/* Exercício Módulos #1 - Aula 09 - Arq de exportação
    -> Crie um módulo que exporte uma função (em um arquivo separado).
    -> Após isso, importe o módulo no arquivo principal e execute a função importada.
 - Ronilson Alves - */

 function Restaurante (nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function () {
        return console.log("Olá, desejamos boas-vindas ao",this.nome,'\nEsse é o nosso cardápio:\n',this.cardapio.join(" - "));
    }
};

module.exports = Restaurante;