/* Ainda falta, integrar com banco pra salvar as mensagens e alterar o alerta quando usuário enviar a mensagem. */
import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Reaptcha from 'reaptcha';
import Swal from 'sweetalert2';
import './style.scss';

export default class Contato extends Component {
    /* For Recaptcha */
    constructor(props) {
        super(props);
        this.state = {
            verified: false
        };
    }
    onVerify = recaptchaResponse => {
        this.setState({
            verified: true
        });
    };

    handleSubmit = (values) => {
        if (values.nome === '' || values.sobrenome === '' || values.telefone === '' || values.email === '' || values.email.length < 5) {
            Swal.fire({
                title: 'Preencha devidamente os campos do formulário!',
                icon: 'error',
                text: 'Todos os campos deste formulário devem ser preenchidos. Por favor, tente novamente.'
            })
        } else {
            Swal.fire({
                title: 'Seus dados foram registrados com sucesso!',
                icon: 'success',
                html: '<b>Nome:</b> ' + values.nome + '<br><b>Sobrenome:</b> ' + values.sobrenome + '<br><b>Telefone:</b> ' + values.telefone + '<br><b>Email:</b> ' + values.email
            })
        }
        console.log(values)
    }

    render() {
        return (
            <div id="formulario" className="d-flex flex-wrap flex-row justify-content-center align-items-center">
                <div id="formulario-content" className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center">
                    <h3 className="display-4 h3 mb-3 font-weight-bold">E aí, vamos conversar?</h3>
                    <p className="lead">Quer falar sobre algum projeto, tem proposta de job ou só quer fazer aquele networking maroto?</p>
                    <Formik initialValues={{ nome: '', telefone: '', email: '', message: '' }} onSubmit={this.handleSubmit}>
                        <Form>
                            <div className="form-floating mb-3">
                                <Field type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" required />
                                <label htmlFor="nome">Seu nome</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field type="number" className="form-control" id="telefone" name="telefone" placeholder="Seu telefone" required />
                                <label htmlFor="telefone">Seu telefone</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field type="email" className="form-control" id="email" name="email" placeholder="Seu email" required />
                                <label htmlFor="email">Seu email</label>
                            </div>
                            <div className="form-floating mb-2">
                                <Field as="textarea" id="mensagem" name="mensagem" className="form-control" placeholder="Digite sua mensagem" required />
                                <label htmlFor="mensagem">Sua mensagem</label>
                            </div>
                            <Reaptcha sitekey="6LdvHzEdAAAAACj-zrewzwXQ6D67vTpHwS_mi6Cm" onVerify={this.onVerify} className="d-flex flex-wrap flex-column justify-content-center align-items-center text-center"/>
                            <button className="btn btn-dark my-3" type="submit" disabled={!this.state.verified}>Enviar mensagem</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
}