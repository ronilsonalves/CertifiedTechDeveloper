import { Component } from "react";
import './style.scss';

export default class Sobre extends Component {

    render() {
        return (
            <>
                <section id="sobre">
                    <div id="sobre-carousel" className="carousel slide container-xl shadow-lg p-3 my-5 bg-body rounded" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#sobre-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#sobre-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#sobre-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://pixabay.com/get/g21a9f974085beff94123075edc1fcd58dd8e5a721dc40f5f8f3a0daf29a58bcdea57862da5355c54ec79d524270643136328becc9903f993ad317e48e43f78b717240339707b298a2148abe8e175bf44_1280.jpg" alt="amante das estrelas" />
                                <div className="carousel-caption ">
                                    <h5 className="display-6">Nem só de café e código...</h5>
                                    <p className="lead">Eu sou apaixonado por astronomia. Quero muito trabalhar com algo relacionada a ela em TI.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://pixabay.com/get/g055ec684337759049aaedf3c508b15ec29e219b26b28d2b60a4a4fd3ced0003aea91dac1bdf229048c7f95fe1abfc53f7939aeb49d53cf6175086beb7857ec61002cebab66a015b6766617d35fef0c2b_1920.jpg" alt="amante das estrelas" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="display-6">Nem só de café e código...</h5>
                                    <p className="lead">Eu sou apaixonado por astronomia. Quero muito trabalhar com algo relacionada a ela em TI.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://pixabay.com/get/g055ec684337759049aaedf3c508b15ec29e219b26b28d2b60a4a4fd3ced0003aea91dac1bdf229048c7f95fe1abfc53f7939aeb49d53cf6175086beb7857ec61002cebab66a015b6766617d35fef0c2b_1920.jpg" alt="amante das estrelas" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="display-6">Nem só de café e código...</h5>
                                    <p className="lead">Eu sou apaixonado por astronomia. Quero muito trabalhar com algo relacionada a ela em TI.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#sobre-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#sobre-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </>
        )
    }
}