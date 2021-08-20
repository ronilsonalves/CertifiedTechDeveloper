/* Exercício da mesa de trabalho #2 
    *Integrantes:
    * Adriano, Alan Alves, Carlos Augusto, Diego Calheiros, Fernando de Amorin, Matheus Augusto, Ronilson Alves e Samuel Xavier
    */
const listadeFelinos = [
    {
      title: 'O tigre',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Tigerramki.jpg', 
      description: 'O Tigre (Panthera tigris) é uma das espécies da subfamília dos panterinos (família Felidae) pertencente ao gênero Panthera. Só é encontrado no continente asiático; É um predador carnívoro e é a maior espécie de felino do mundo, junto com o leão, podendo ambos atingir um tamanho comparável ao dos maiores fósseis de felinos.',
      createdAt: '2021-06-01T23:12:11.837Z'
    },
    {
      title: 'O leão',
      imgUrl: 'https://sites.google.com/site/animallandiakids/_/rsrc/1472861480910/le/leao.jpg?height=300&width=400',
      description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felídeos que é uma das cinco espécies do gênero Panthera. Leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África Subsaariana (com exceção das regiões de selva da costa atlântica e da Bacia do Congo) e em uma pequena área do noroeste da Índia',
      createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
      title: 'O leopardo',
      imgUrl: 'https://sites.google.com/site/ajudaalunos/_/rsrc/1262715803180/leopardo/image002.png',
      description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felídeos. Como três dos outros gatos do gênero Panthera: o leão, o tigre e a onça, eles se caracterizam por uma modificação no osso hióide que lhes permite rugir. É também conhecida como pantera marrom e, quando tem a pelagem totalmente escura, como pantera negra (melânica).',
      createdAt: '2021-05-05T23:12:11.837Z'
    },
    {
      title: 'A pantera negra',
      imgUrl: 'https://1.bp.blogspot.com/-KrgUI7pK1Jk/TeYhEfz7YOI/AAAAAAAAAAo/y6Qh0ePkHz4/w1200-h630-p-k-no-nu/pantera+negra1.jpg',
      description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, principalmente o leopardo (Panthera pardus) e a onça pintada (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
      createdAt: '2021-04-09T23:12:11.837Z'
    },
    {
      title: 'O jaguar',
      imgUrl: 'https://zoozwiki.com/wp-content/uploads/2018/09/jaguar.jpg',
      description: 'O jaguar, jaguar ou yaguareté (Panthera onca) é um felino carnívoro da subfamília dos Panterinos e gênero Panthera. É a única das cinco espécies atuais desse gênero encontradas na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
      createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
      title: 'O guepardo',
      imgUrl: 'https://2.bp.blogspot.com/-Rk57t4npFzg/Wl-Zmy_iRzI/AAAAAAAAGRE/xubP0yZTEz8JgmKQi4EvEs2fjD-j-waQQCLcBGAs/s1600/guepardo_r.jpg',
      description: 'A chita (Acinonyx jubatus) 1 é um membro atípico da família dos felídeos. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido, atingindo velocidade máxima de 115 km / h em corridas de até quatrocentos ou quinhentos metros.',
      createdAt: '2021-05-22T23:12:11.837Z'
    },
  ];

  /* For Each no Array para iterar os elementos do array de objetos e manipular a DOM com estes dados. */
listadeFelinos.forEach(function(felino){

    let tacaUrl = 'url('+felino.imgUrl+')'; /* Pega a URL da imagem e deixa no padrão do atributo CSS: url(https://enderoimg.com/p/arquivo.jpg) */

    /* Criando e adicionando elementos HTML à página original, usando o escutador de eventos, toda vez que a página for carregada a função abaixo irá manipular o DOM */
    window.addEventListener("load", function(){
        /* Pegando o elemento pai - card-container*/
        var pai = document.getElementById("card-container");

        /* Criando os elementos para adicionar */
        var novaImg = document.createElement('span'); /* Cria um elemento HTML do tipo span */
        novaImg.classList.add("card-img") /* Adiciona a classe "card-img a ele" */
        novaImg.style.setProperty('background-image',tacaUrl); /* Seta a background-image e passa a URL formatada como valor */

        var novoTitle = document.createElement('h2'); /* Cria um elemento HTML do tipo h2 */
        novoTitle.classList.add("card-titulo"); /* Adiciona a classe "card-titulo" a ele */
        var conteudoTitulo = document.createTextNode(felino.title); /* Cria um node de texto para ser adicionado ao h2 */
        novoTitle.appendChild(conteudoTitulo); /* Adiciona */

        var novaDesc = document.createElement('span'); /* Cria um elemento HTML do tipo span */
        novaDesc.classList.add("card-descricao"); /* Adiciona a classe "card-descricao" a ele */
        var conteudoDesc = document.createTextNode(felino.description); /* Cria um node de texto para ser adicionado a descrição */
        novaDesc.appendChild(conteudoDesc); /* Adiciona */

        /* Adicionando elementos criados dentro do elemento pai */
        pai.append(novaImg);
        pai.append(novoTitle);
        pai.append(novaDesc);
    })
});
