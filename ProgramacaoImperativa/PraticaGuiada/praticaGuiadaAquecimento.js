/* Exercícios de Programação Imperativa - 1ª Prática Guiada (Aquecimento)
- Ronilson Alves */


const produtos = [
    {
        nome: "Notebook Core i7 8ªGen",
        valor: 6499.00,
        qualidade: 9,
        status: true
    },
    {
        nome: "Smartphone Android 11 6GB RAM 128GB",
        valor: 1599.00,
        qualidade: 7,
        status: true
    },
    {
        nome: "Monitor 4K Ultrawide 26pol",
        valor: 1799.00,
        qualidade: 9,
        status: false
    },
    {
        nome: "Teclado Mecânico ABNT2",
        valor: 459.00,
        qualidade: 8,
        status: true
    },
    {
        nome: "Mouse sem fio 6000 DPI",
        valor: 159.00,
        qualidade: 5,
        status: true
    },
    {
        nome: "Mesa digitalizadora 8pol",
        valor: 759.00,
        qualidade: 6,
        status: true
    },
    {
        nome: "Camera Semiprofissional 18MP",
        valor: 1599.00,
        qualidade: 7,
        status: false
    },
    {
        nome: "Lente 300mm c/ Autofocus",
        valor: 799.00,
        qualidade: 8,
        status: false
    }
]

let carrinho = produtos.filter(function(poeNoCarrinho){
    if (poeNoCarrinho.status == true && (poeNoCarrinho.valor >= 482 || poeNoCarrinho.valor <= 1600) && poeNoCarrinho.qualidade > 6) return poeNoCarrinho
});

//console.log(carrinho); // verificando se os itens foram adicionados ao carrinho usando o filter

function exibeCarrinho(carrinho) {
    let valorTotal = 0;
    console.log("------------ Carrinho ------------\n")
    carrinho.forEach(item => {
        console.log("Item:\t",item.nome);
        console.log("Valor unt:\t\t\t\t\tR$",item.valor,"\n");
        valorTotal += item.valor;        
    });
    console.log("----------------------------------");
    console.log("Valor Total:\t\t\t\tR$",valorTotal,"\n");
    
}

exibeCarrinho(carrinho);