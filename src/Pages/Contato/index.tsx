/* Componentes */
import { Header } from '../../components/header/index'
import { Footer } from '../../components/footer/index'

/* Estilo */
import './style.scss'

export function Contato() {
    return (
        <div>
            <Header />
            <div className="contato">

                <h1>Entre em contato conosco!</h1>
                <form action="">
                    <label htmlFor="">Nome Completo</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    <label htmlFor="">Telefone</label>
                    <input type="text" />
                    <label htmlFor="">Mensagem</label>
                    <input className='inputMensagem' type="textarea" />
                    <input className='btnEnviar' type="submit" placeholder='Enviar' />
                </form>
            </div>
            <Footer />
        </div>
    )

}