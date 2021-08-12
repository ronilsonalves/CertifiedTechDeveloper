/* Desafio - Mesa 06 - Carlos Augusto, Erik Kayser, Illo Vinicius, Ronilson Alves, William Lima
 * Vamos programar uma calculadora simples com o conhecimento que adquirimos até agora.
 * A calculadora terá 4 funções básicas: Somar | Subtrair | Multiplicar | Dividir
 * 
 * 
*/

/* Importação dos módulos da calculadora */
import { somar } from './modules/somar.js';
import { subtrair } from './modules/subtrair.js';
import { multiplicar } from './modules/multiplicar.js';
import { dividir } from './modules/dividir.js';/* 


/* Variáveis */
let primNum;
let segNum;
let opUsuario;

opUsuario = parseInt(prompt("Por favor, escolha a opção desejada\n[1] SOMAR\n[2] SUBTRAIR\n[3] MULTIPLICAR\n[4] DIVIDIR\n[qualquer outra tecla] PARA SAIR"));

switch (opUsuario) {
    case 1:
        exibirResultado(opUsuario);
        break;
    
    case 2:
        exibirResultado(opUsuario);
        break;

    case 3:
        exibirResultado(opUsuario);
        break;

    case 4:
        exibirResultado(opUsuario);
        break;

    default:
        console.log("Saindo do programa pq o usuário escolheu/não digitou uma das 4 opções válidas....")
        break;

}

/* A função pede os valores ao usuário, trata e valida os valores fornecidos e chama a função importada correspondente */
function exibirResultado(opUsuario) {
    switch (opUsuario) {
        case 1:
            alert("Você escolheu SOMAR. Informe os números no campo a ser informado a seguir.")
            primNum = parseInt(prompt("Informe o 1º Número:"));
            segNum = parseInt(prompt("Informe o 2º Número:"));
            resultado = somar(primNum,segNum);
            alert("RESULTADO: " + somar(primNum,segNum).toString());
            console.log("Soma: ",somar(primNum,segNum));
            break;

        case 2:
            alert("Você escolheu SUBTRAIR. Informe os números no campo a ser informado a seguir.")
            primNum = parseInt(prompt("Informe o 1º Número:"));
            segNum = parseInt(prompt("Informe o 2º Número:"));
            alert("RESULTADO: " + subtrair(primNum,segNum).toString());
            console.log("Subtração: ",subtrair(primNum,segNum));
            break;

        case 3:
            alert("Você escolheu MULTIPLICAR. Informe os números no campo a ser informado a seguir.")
            primNum = parseInt(prompt("Informe o 1º Número:"));
            segNum = parseInt(prompt("Informe o 2º Número:"));
            if (primNum != 0 || segNum !=0) {
                alert("RESULTADO: " +multiplicar(primNum,segNum).toString());
                console.log("Multiplciação: ",multiplicar(primNum,segNum));
            } else {
                alert("RESULTADO: Qualquer multiplicação envolvendo o número ZERO é ZERO >",Multiplicar(primNum,segNum));
                console.log("Não é possível multiplicar por zero...");
            }            
            break;

        case 4:
            alert("Você escolheu DIVIDIR. Informe os números no campo a ser informado a seguir.")
            primNum = parseInt(prompt("Informe o Número a ser dividido:"));
            if (primNum == 0) {
                alert("Você não pode divir NADA por alguma coisa, o resultado sempre será 0 :(");
            } else {
                segNum = parseInt(prompt("Informe o Número pelo qual faremos a divisão:\n(Lembre-se, divisão por 0 é impossível!)"));
            }
            alert("RESULTADO: " + dividir(primNum,segNum).toString());
            console.log("Divisão: ",dividir(primNum,segNum));
            break;
    }
}