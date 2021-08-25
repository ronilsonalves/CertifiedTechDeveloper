/* 
 * Mesa de trabalho #?: Maycon, Rafael Teixeira, Ronilson Alves, Samuel Xavier e Vivian Sanches
 * Objetivo: Construir um formulário e alterar suas propriedades com JavaScript.
 *
 */
window.addEventListener('load',()=> {
    /* Criação do elemento img para logo */
    var imgLogo = document.createElement('div');
    imgLogo.setAttribute("id","logoImg");
    
    let formulario = document.querySelector('#formulario');
    // Crio a div do título, adiciono a classe title a ele e defino o conteúdo como "Login"
    var divTitulo = document.createElement('div');
    divTitulo.classList.add("title") 
    var titulo = document.createElement('h1');
    var conteudoTitulo = document.createTextNode("Login");
    titulo.appendChild(conteudoTitulo);

    /* Crio o formulário e também seus respectivos campos, também defino seus atributos de forma
    dinâmica. */
    var novoForm = document.createElement('form');
    novoForm.setAttribute("action","#");
    novoForm.setAttribute("method","POST");
    var email = document.createElement('input');
    var senha = document.createElement('input');
    /* Div pra por os campos do form */
    var emailArea = document.createElement('div');
    var passwordArea = document.createElement('div');
    var botoes = document.createElement('div');
    emailArea.setAttribute("class", "item-form");
    passwordArea.setAttribute("class","item-form");
    botoes.setAttribute("class","item-form");
    /* Email */
    var emailLabel = document.createElement('label');
    var conteudoEmailLabel = document.createTextNode("Email:");
    emailLabel.appendChild(conteudoEmailLabel);
    email.setAttribute("id", "email");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Digite seu email");
    // Item #8. Adicionar disabled ao email:
    //email.setAttribute("disabled",true);
    // Item #10. Remover placeholder do email:
    //email.removeAttribute("placeholder");
    emailLabel.setAttribute("for","email");
    /* Senha */
    var senhaLabel = document.createElement('label');
    var conteudoSenhaLabel = document.createTextNode("Senha:");
    senhaLabel.appendChild(conteudoSenhaLabel);
    senha.setAttribute("id", "senha");
    senha.setAttribute("type", "password");
    senha.setAttribute("autocomplete","on")
    senha.setAttribute("placeholder", "Digite sua senha");
    senhaLabel.setAttribute("for","senha");
    /* Botões - Enviar*/
    var botaoEnviar = document.createElement('button');
    var textoEnviar = document.createTextNode("Enviar");
    botaoEnviar.setAttribute("id","enviar");
    botaoEnviar.appendChild(textoEnviar);
    /* - Cancelar */
    var botaoCancelar = document.createElement('button');
    var textoCancelar = document.createTextNode("Cancelar");
    botaoCancelar.setAttribute("type","reset");
    botaoCancelar.setAttribute("id","cancelarBtn");
    botaoCancelar.appendChild(textoCancelar);

    emailArea.appendChild(emailLabel);
    emailArea.appendChild(email);

    passwordArea.appendChild(senhaLabel);
    passwordArea.appendChild(senha);

    botoes.appendChild(botaoEnviar);
    botoes.appendChild(botaoCancelar);

    /* Adiciono os campos ao formulário usando o appendChild() */
    novoForm.appendChild(emailArea);
    novoForm.appendChild(passwordArea);
    novoForm.appendChild(botoes);

    formulario.appendChild(divTitulo);
    divTitulo.appendChild(titulo);
    formulario.appendChild(novoForm);
    divTitulo.before(imgLogo);
});



