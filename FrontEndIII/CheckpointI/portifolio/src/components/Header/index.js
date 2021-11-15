/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import logo from '../logo.svg'
import './style.scss';

export default class Header extends Component {

    render() {
        return (
            <>
                <header >
                    <nav id="cabecalho" className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={logo} alt="ronilson alves"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#hero">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#sobre">Sobre</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#skills">Minhas habilidades</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#works">O que já fiz</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#formulario">Vamos conversar?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}