/* eslint-disable no-unused-vars */
import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider} from "firebase/app-check"
import Reaptcha from 'reaptcha';
import Swal from 'sweetalert2';
import './style.scss';

const firebaseConfig = {
    apiKey: "AIzaSyAfpp4cKmKfgZhVog2i-JTDhgpR5JK_LJw",
    authDomain: "sitepessoal-5f940.firebaseapp.com",
    projectId: "sitepessoal-5f940",
    databaseURL: "https://sitepessoal-5f940-default-rtdb.firebaseio.com/",
    storageBucket: "sitepessoal-5f940.appspot.com",
    messagingSenderId: "1046486810992",
    appId: "1:1046486810992:web:637bfc45d1bb55e8240fb5",
    measurementId: "G-Q7H78JWKXR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdQwDodAAAAAKPgBAF1MrIejiRZeez92I_uMMjK'),
  
    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
  });



export default class Contato extends Component {

    /* For Recaptcha */
    constructor(props) {
        super(props);
        this.state = {
            verified: false
        };
    }

    /* For Firebase */
    writeUserData(messageId, name, telefone, email, mensagem) {
        const db = getDatabase();
        set(ref(db, 'mensagens/' + messageId), {
          nome: name,
          telefone: telefone,
          email : email,
          mensagem : mensagem
        });
      }

    onVerify = recaptchaResponse => {
        this.setState({
            verified: true
        });
    };

    handleSubmit = (values) => {
        if (values.nome === '' || values.telefone === '' || values.email === '' || values.email.length < 5) {
            Swal.fire({
                title: 'Eu também estou ansioso pra falar com você, mas...',
                icon: 'error',
                text: 'É necessário preencher todos os campos deste formulário. Por favor, tente novamente.'
            })
        } else {
            this.writeUserData(Date(),values.nome,values.telefone,values.email,values.message);
            Swal.fire({
                title: 'Sua mensagem foi enviada!',
                icon: 'success',
                html: '<b>' + values.nome + '</b>,<br> sua mensagem foi enviada com sucesso!'
            })
        }
        console.log(values)
    }

    render() {
        return (
            <div id="formulario" className="d-flex flex-wrap flex-row justify-content-center align-items-center">
                <div id="formulario-content" className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center">
                    <h3 className="display-4 h3 mb-3 font-weight-bold" style={{ color: 'white' }}>E aí, vamos conversar?</h3>
                    <p className="lead mx-5" style={{ color: 'white' }}>Quer falar sobre algum projeto, tem proposta de job ou só quer fazer aquele networking maroto?</p>
                    <Formik initialValues={{ nome: '', telefone: '', email: '', message: '' }} onSubmit={this.handleSubmit}>
                        <Form >
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
                                <Field as="textarea" id="message" name="message" className="form-control" placeholder="Digite sua mensagem" required />
                                <label htmlFor="message">Sua mensagem</label>
                            </div>
                            <Reaptcha sitekey="6LdvHzEdAAAAACj-zrewzwXQ6D67vTpHwS_mi6Cm" onVerify={this.onVerify} className="d-flex flex-wrap flex-column justify-content-center align-items-center text-center" />
                            <button className="btn btn-dark my-3" type="submit" disabled={!this.state.verified}>Enviar mensagem</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }
}