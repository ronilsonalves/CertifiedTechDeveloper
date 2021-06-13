/* Exercício Praticando com Loops #3 - Aula 06
    -> Utilização de Loops (for) - Tabuada
 - Ronilson Alves - */

 // Declaração de variáveis e atribuição de valores
 let operacao = undefined;
 operacao='Adicao'


 // Utilização de swith para escolher a operação da tabuada.

 switch (operacao) {
     case 'Adicao':
         for (let i=1; i<=10; i++) {
             console.log("Tabuada da Adição:",i);
             for (let j=1; j<=10; j++) {
                 console.log(i,"+",j,"=",(i+j));
                 //console.log(i+j);
             }
         }
    break
    case 'Subtracao':
        for (let i=1; i<=10; i++) {
            console.log("Tabuada da Subtração:",i);
            for (j=1; j<=10; j++) {
                console.log(i,"-",j,"=",(i-j));
            }
        }
    break
    case 'Multiplicacao':
        for (let i=1; i<=10; i++) {
            console.log("Tabuada da Multiplicação:",i);
            for (let j=1; j<=10; j++) {
                console.log(i,"x",j,"=",(i*j));
            }
        }
    break
    case 'Divisao':
        for (i=1; i<=10; i++) {
            console.log("Tabuada da Divisao por:",i);
            for (j=1; j<=10; j++) {
                console.log((j*10),"/",i,"=",((j*10)/i).toFixed(1));
            }
        }
    break
    default:
        console.log("Operação matemática inválida.")
 }
 