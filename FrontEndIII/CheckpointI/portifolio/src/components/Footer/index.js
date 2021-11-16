/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import './style.scss';

export default class Footer extends Component {

    render() {
        return (
            <>
                <footer id="rodape" className="text-center text-lg-start">
                    <div className="container d-flex justify-content-center p-3">
                        <a className="text-white" href="https://linkedin.com/in/ronilsonalves"><i className="bi bi-linkedin"></i></a>
                        <a className="text-white" href="https://github.com/ronilsonalves"><i className="bi bi-github"></i></a>
                        <a className="text-white" href="https://twitter.com/ronilsonalves"><i className="bi bi-twitter"></i></a>
                        <a className="text-white" href="https://instagram/ronilsonalves"><i className="bi bi-instagram"></i></a>
                    </div>
                    <div className="text-center text-white p-3">
                        <p>Copyright ©2021 - <a className="text-white" href="https://ronilsonalves.com/">Ronilson Alves</a>. Todos os direitos reservados.</p>
                        Desenvolvido em React, feito com <i className="bi bi-heart-fill"> </i>
                    </div>
                </footer>
            </>
        )
    }
}