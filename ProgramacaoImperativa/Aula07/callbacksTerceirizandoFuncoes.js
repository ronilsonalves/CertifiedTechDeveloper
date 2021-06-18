/* Exercício Funções Avançadas #2 - Aula 07
    -> Crie uma função acaoCarro(), que receberá uma callback como parâmetro.
 - Ronilson Alves - */

 // Declaraçao das funções
 const andar=()=>console.log("o carro está andando");
 const parar=()=>console.log("o carro parou");

 acaoCarro=(executarAcao)=>executarAcao();

 acaoCarro(parar);