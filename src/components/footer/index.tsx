import "./index.scss"
import LogoFacebook from './redes-sociais/facebook.png';
import LogoInstagram from './redes-sociais/instagram.png';
import LogoWhatsapp from './redes-sociais/whatsapp.png'

export function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <h3>Contatos</h3>
                    <p>(11) 97416 9551</p>
                    <p>base.atelie@gmail.com</p>
                </li>
                <li>
                    <h3>Redes Sociais</h3>
                    <div className="logos">
                        <img src={LogoWhatsapp} alt="" />
                        <img src={LogoInstagram} alt="" />
                        <img src={LogoFacebook} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )

}
