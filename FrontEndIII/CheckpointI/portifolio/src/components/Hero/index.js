/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import './style.scss';

export default class Hero extends Component {

    render() {
        return (
            <div id="hero" className="bg-image f-flex">
                <div className="mask text-white">
                    <div className="container d-flex align-items-center text-center">
                        <div>
                            <h1 className="display-3 mt-4 py-3 px-3 ">"Olá, mundo!"</h1>
                            <p className="lead">
                                É um prazer ter você por aqui. Essa é minha home page, mas você pode se sentir em casa, tá?
                                Aqui você pode conhecer um pouco mais sobre mim e minhas motivações pra seguir na área de TI,
                                bem como conferir alguns projetos que desenvolvi e/ou em que participei.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}