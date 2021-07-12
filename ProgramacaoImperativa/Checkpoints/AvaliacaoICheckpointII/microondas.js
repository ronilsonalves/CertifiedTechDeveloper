/* Avaliação #1 - Checkpoint #2 - Código refatorado
    -> Simulação de um aparelho Microondas
 - Ronilson Alves - */


// Criação de um array de objetos, com nome e duração de cozimento do prato. 
let menu = {
    1: {nome: "Pipoca", duracao: 10},
    2: {nome: "Macarrão", duracao: 8},
    3: {nome: "Carne", duracao: 15},
    4: {nome: "Feijão", duracao: 12},
    5: {nome: "Brigadeiro", duracao: 8}
}

// Criação da função microOndas que simulará um microondas
function microOndas (opcao,opUsuario,tempoDoUsuario) {
    var varTemp = 0;
    var duracao = 0;

/*  Criação das funções cozimento() e cozinhar() para evitar a repetição de código dentro dos cases do switch
 e que realizará os cálculos e exibirá o resultado para o usuário. */
    function cozimento () {
        duracao = menu[opcao].duracao;

        function cozinhar() {
            if (varTemp < duracao) {
                console.log("Tempo insuficiente de cozimento para",menu[opcao].nome);
            } else if (varTemp >= (duracao * 3)){
                console.log("KABUUUUUUMMMMMM!");
            } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                console.log(menu[opcao].nome,"queimou!")
            } else {
                console.log(menu[opcao].nome,"pronto(a), bom apetite!")
            }
        }

        if (opUsuario === "+") {
            varTemp = duracao+tempoDoUsuario;
            cozinhar();
        } else if (opUsuario === "-") {
            varTemp = duracao-tempoDoUsuario;
            cozinhar();
        } else {
            console.log("Prato pronto, bom apetite!"); // caso o usuário não acrescente ou decresça o tempo de cozimento.
        }
    }

    switch(opcao) {
        case 1:
            cozimento();
            break

        case 2:
            cozimento();
            break;
        
        case 3:
            cozimento();
            break;
        
        case 4:
            cozimento();
            break
        
        case 5:
            cozimento();
            break;
        
        default:
            console.log("Desculpe, prato inexistente!");
    }
};

/* Testes dos pratos */
microOndas(1); // prato 1 sem alterações de tempo
microOndas(1,"+",10); // prato 1 com aumento de tempo
microOndas(1,"-",5); // prato 1 diminuindo o tempo
microOndas(2,"+",25); // adicao de tempo ao prato 2
microOndas(6); // verificando se outros pratos funcionam.

// testes dos pratos sem adicionar ou remover tempo de cozimento.
microOndas(1);
microOndas(2);
microOndas(3);
microOndas(4);
microOndas(5);