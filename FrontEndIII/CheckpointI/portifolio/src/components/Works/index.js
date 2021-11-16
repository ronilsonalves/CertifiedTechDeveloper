import { Component } from "react";
import './style.scss';

export default class Works extends Component {

    works = [
        {
            id: 0,
            short: 'app-to-do',
            nome: 'App To-Do',
            descricao: 'App web construído em JS com persistência de dados usando o Realtime database do Firebase, objeto de avaliação do Checkpoint II dos integrantes do Grupo 2 da disciplina de Front End II do Certified Tech Developer.',
            url_img: 'https://imgsitepessoal.s3.sa-east-1.amazonaws.com/projetos/apptodo.png',
            url_view: 'https://ronilsonalves.github.io/ToDo/',
            url_github: 'https://github.com/ronilsonalves/ToDo'
        },
        {
            id: 1,
            short: 'cadastrar-filmes',
            nome: 'Cadastro de filmes',
            descricao: 'A equipe construiu um weba app que simula o cadastro de Filmes, onde o usuário pode Inserir o Título, a URL do cartaz do filme, bem como sua sinopse. De forma dinâmica, esses dados são exibidos em cards. Foi usado JSON e LocalStorage.',
            url_img: 'https://imgsitepessoal.s3.sa-east-1.amazonaws.com/projetos/cadastrar-filmes.jpeg',
            url_view: 'https://brunnofaria.github.io/projetofilmes/',
            url_github: 'https://github.com/BrunnoFaria/projetofilmes'
        },
        {
            id: 2,
            short: 'projeto-incrivel-iii',
            nome: 'Music House',
            descricao: 'Uma landing page de uma startup de música independente. Objeto de avaliação do Chekpoint II de Front End I',
            url_img: 'https://imgsitepessoal.s3.sa-east-1.amazonaws.com/projetos/musichouse.png',
            url_view: 'https://altbruno.github.io/projetoFrontEnd/',
            url_github: 'https://github.com/ALTbruno/projetoFrontEnd'
        },
        {
            id: 1,
            short: 'projeto-incrivel-ii',
            nome: 'BULMA CSS',
            descricao: 'Mais legal do que Bootstrap e ao meu ver, com componentes mais bonitos.',
            url_img: 'https://raw.githubusercontent.com/jgthms/bulma/master/docs/images/bulma-banner.png',
            url_view: 'https://bulma.io/',
            url_github: 'https://github.com/jgthms/bulma'
        },
    ];

    render() {
        return (
            <section id="works" className="container-fluid">
                <h2 className="h2 display-4 mt-5 text-center">O que já fiz como dev</h2>
                <div className="row justify-content-center align-items-center p-5">
                    {
                        this.works.map(trabalho => {
                            return (
                                <div id={trabalho.short} key={trabalho.id} className="bg-image col-lg-5 overflow-hidden shadow-lg p-3 m-3 bg-body rounded" style={{ backgroundImage: `url(${trabalho.url_img})` }}>
                                    <div className="d-flex flex-column mask text-white justify-content-center align-items-center">
                                        <h3 className="h3 display-4">{trabalho.nome}</h3>
                                        <p className="label px-4">{trabalho.descricao}</p>
                                        <div id="gitview-btns" className="d-flex flex-wrap flex-row justify-content-center align-items-center align-items-center text-center">
                                            <a className="btn btn-outline-light mx-2" href={trabalho.url_github}><i className="bi bi-github"></i></a>
                                            <a className="btn btn-outline-light mx-2" href={trabalho.url_view}><i className="bi bi-display-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </section>

        )
    }
}