/* Avaliação #1 - Checkpoint #2 
    -> Simulação de um aparelho Microondas
 - Ronilson Alves - */

// Criação de um array de objetos, com nome e duração de cozimento do prato. 
let menuMicroOndas = {
    1: {nome: "Pipoca", duracao: 10},
    2: {nome: "Macarrão", duracao: 8},
    3: {nome: "Carne", duracao: 15},
    4: {nome: "Feijão", duracao: 12},
    5: {nome: "Brigadeiro", duracao: 8}
}

// Função que faz o calculo dos parametros passados pelo usuario
function microOndas (opcao,opUsuario,tempoDoUsuario) {
    let varTemp = 0;
    let duracao = 0;

    // Uso do swift para verificar a opção do Usuário.
    switch(opcao) {
        case 1:
            duracao = menuMicroOndas[opcao].duracao;
            if (opUsuario === "+") {
                varTemp = duracao+tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else if (opUsuario === "-") {
                varTemp = duracao-tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else {
                console.log("Prato pronto, bom apetite!"); // caso o usuário não acrescente ou decresça o tempo de cozimento.
            }
            break;
            
        case 2:
            duracao = menuMicroOndas[opcao].duracao;
            if (opUsuario === "+") {
                varTemp = duracao+tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else if (opUsuario === "-") {
                varTemp = duracao-tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else {
                console.log("Prato pronto, bom apetite!"); // caso o usuário não acrescente ou decresça o tempo de cozimento.
            }
            break;

        case 3:
            duracao = menuMicroOndas[opcao].duracao;
            if (opUsuario === "+") {
                varTemp = duracao+tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else if (opUsuario === "-") {
                varTemp = duracao-tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else {
                console.log("Prato pronto, bom apetite!"); // caso o usuário não acrescente ou decresça o tempo de cozimento.
            }
            break;

        case 4:
            duracao = menuMicroOndas[opcao].duracao;
            if (opUsuario === "+") {
                varTemp = duracao+tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else if (opUsuario === "-") {
                varTemp = duracao-tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else {
                console.log("Prato pronto, bom apetite!"); // caso o usuário não acrescente ou decresça o tempo de cozimento.
            }
            break;

        case 5:
            duracao = menuMicroOndas[opcao].duracao;
            if (opUsuario === "+") {
                varTemp = duracao+tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else if (opUsuario === "-") {
                varTemp = duracao-tempoDoUsuario;
                if (varTemp < duracao) {
                    console.log("Tempo de cozimento insuficiente!");
                } else if (varTemp >= (duracao * 3)){
                    console.log("KABUUUUUUMMMMMM!");
                } else if (varTemp > (duracao * 2) && varTemp < (duracao * 3)) {
                    console.log(menuMicroOndas[opcao].nome,"queimou!")
                } else {
                    console.log(menuMicroOndas[opcao].nome,"pronto(a), bom apetite!")
                }
            } else {
                console.log("Prato pronto, bom apetite!"); // caso o usuário não acrescente ou decresça o tempo de cozimento.
            }
                break;

        default:
            console.log("Desculpe, prato inexistente!");
    }
}

microOndas(1); // prato 1 sem alterações de tempo

microOndas(1,"+",5); // prato 1 com aumento de tempo

microOndas(1,"-",5); // prato 1 diminuindo o tempo

microOndas(2,"+",25); // adicao de tempo prato 2

microOndas(6); // verificando se outros pratos funcionam.

// testes dos pratos sem adicionar ou remover tempo de cozimento.
microOndas(1);
microOndas(2);
microOndas(3);
microOndas(4);
microOndas(5);