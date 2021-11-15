import { Component } from "react";
import './style.scss';

export default class Works extends Component {

    works = [
        {
            id: 0,
            short: 'app-to-do',
            nome: 'App To-Do',
            descricao: 'App web construído em JS com persistência de dados usando o Realtime database do Firebase, objeto de avaliação do Checkpoint II dos integrantes do Grupo 2 da disciplina de Front End II do Certified Tech Developer.',
            url_img: 'https://imgsitepessoal.s3.sa-east-1.amazonaws.com/apptodo.png',
            url_view: 'https://ronilsonalves.github.io/ToDo/',
            url_github: 'https://github.com/ronilsonalves/ToDo'
        },
        {
            id: 1,
            short: 'cadastrar-filmes',
            nome: 'Cadastro de filmes',
            descricao: 'A equipe construiu um weba app que simula o cadastro de Filmes, onde o usuário pode Inserir o Título, a URL do cartaz do filme, bem como sua sinopse. De forma dinâmica, esses dados são exibidos em cards.',
            url_img: 'https://imgsitepessoal.s3.sa-east-1.amazonaws.com/cadastrarfilmes.png',
            url_view: 'https://brunnofaria.github.io/projetofilmes/',
            url_github: 'https://github.com/BrunnoFaria/projetofilmes'
        },
        {
            id: 2,
            short: 'projeto-incrivel-ii',
            nome: 'Projeto Incrível II',
            descricao: 'A descrição do projeto vai aqui',
            url_img: 'linkgoeshere',
            url_github: 'linkgoeshere'
        },
        {
            id: 3,
            short: 'projeto-incrivel-iii',
            nome: 'Projeto Incrível I',
            descricao: 'A descrição do projeto vai aqui',
            url_img: 'linkgoeshere',
            url_github: 'linkgoeshere'
        }
    ];

    render() {
        return (
            <section id="works" className="container-fluid">
                <h2 className="h2 display-4 mt-5 text-center">Olha o que já fiz como dev:</h2>
                <div className="row justify-content-center align-items-center p-5">
                    {
                        this.works.map(trabalho => {
                            return (
                                <div id={trabalho.short} key={trabalho.id} className="bg-image col-lg-5 shadow-lg p-3 m-3 bg-body rounded" style={{ backgroundImage: `url(${trabalho.url_img})` }}>
                                    <div className="mask text-white align-items-center">
                                        <h3 className="h3 display-4">{trabalho.nome}</h3>
                                        <p className="label">{trabalho.descricao}</p>
                                        <div id="gitview-btns" className="d-flex flex-wrap flex-row justify-content-center align-items-center align-items-center text-center">
                                            <a className="btn btn-outline-light" href={trabalho.url_github}><i class="bi bi-github"></i></a>
                                            <a className="btn btn-outline-light" href={trabalho.url_view}><i class="bi bi-display-fill"></i></a>
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