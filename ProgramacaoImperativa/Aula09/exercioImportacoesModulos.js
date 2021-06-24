/* Exercício Módulos #1 - Aula 08 - Arq do exercicio
    -> Crie um módulo que exporte uma função (em um arquivo separado).
    -> Após isso, importe o módulo no arquivo principal e execute a função importada.
 - Ronilson Alves - */

 const Restaurante = require('./Modulos/Restaurante'); // importação do módulo Restaurante que encontra-se na pasta "Módulos"
 
 let novoRestaurante = new Restaurante ('Sabor do Maranhão',['Arroz de cuxá','Baião de 2','Pescada Amarela','Bobó de Camarão']);
 
 novoRestaurante.entrada();

// console.log(Restaurante);