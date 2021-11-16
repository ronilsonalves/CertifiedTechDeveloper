import { Component } from "react";
import './style.scss';

export default class Sobre extends Component {

    render() {
        return (
            <>
                <section id="sobre" className="container-xx align-items-center">
                    <div id="astronomia" className="bg-image flex">
                        <div className="mask text-white">
                            <div className="container d-flex align-items-center justify-content-center text-center">
                                <div>
                                    <h2 className="display-5 mt-1 py-3 px-3 ">Nem só de café e código...</h2>
                                    <p className="lead">
                                        Eu sou apaixonado por astronomia. Eu amo programar tanto quanto eu amo observar as estrelas e por incrível que pareça
                                        essa é uma das minhas motivações na área, quero muito em algum momento trabalhar em algum projeto
                                        relacionado à astronomia em TI, eu sou apaixonado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="escrita" className="bg-image flex">
                        <div className="mask text-white">
                            <div className="container d-flex align-items-center justify-content-center text-center">
                                <div>
                                    <h2 className="display-5 mt-1 py-3 px-3 ">...código não é a única coisa que escrevo</h2>
                                    <p className="lead">
                                        Sempre gostei de escrever, já quis muito trocar cartas com alguém só pelo prazer de escrever.
                                        Porém, como escritor sou ótimo programador. Escrever é um refúgio e a forma que melhor me expresso, já escrevi
                                        em blog, compus música e quem sabe, algum dia eu escreva um livro.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skills">
                    <div className="container px-4 pt-5" id="icon-grid">
                        <h2 className="display-2 pb-2 border-bottom">Minhas habilidades</h2>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-5">
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-html5" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                                    <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">HTML5</h4>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-css3" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                                    <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">CSS</h4>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-javascript" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                                    <path d="M7.5 8h3v8l-2 -1" />
                                    <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">Javascript</h4>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-code" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <path d="M10 13l-1 2l1 2" />
                                    <path d="M14 13l1 2l-1 2" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">Java</h4>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-code" viewBox="0 0 24 24" width="100" height="100" fill="white" >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">React</h4>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">Git & Github</h4>
                                </div>
                            </div>
                            <div className="col d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                    <line x1="3" y1="6" x2="3" y2="19" />
                                    <line x1="12" y1="6" x2="12" y2="19" />
                                    <line x1="21" y1="6" x2="21" y2="19" />
                                </svg>
                                <div>
                                    <h4 className="fw-bold mb-0">Gosto por aprender</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}