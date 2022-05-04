/* Imagens */
import BolsaBlack from '../imgs/bolsa-black.png';
import BolsaGray from '../imgs/bolsa-cinza.png';
import BolsaBlue from '../imgs/bolsa-blue2.png';

/* Bootstrap components */
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Estilo */
import './content.scss';


export function Content() {
    return (
        <div className="content">
            <h1>BASE ATELIÊ</h1>
            <div className="cardImg">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BolsaBlack}
                            alt="First slide"
                        />
                        <div className="carousel-caption">
                            <Carousel.Caption>
                                <h3>Bolsa Black</h3>
                                <p>Estilo para qualquer ocasião.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BolsaGray}
                            alt="Second slide"
                        />
                        <div className="carousel-caption">
                            <Carousel.Caption>
                                <h3>Bolsa Cinza</h3>
                                <p>Estilo para qualquer ocasião.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BolsaBlue}
                            alt="Third slide"
                        />
                        <div className="carousel-caption">
                            <Carousel.Caption>
                                <h3>Bolsa Blue</h3>
                                <p>Estilo para qualquer ocasião.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="accordionClass">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Formas de Pagamento</Accordion.Header>
                        <Accordion.Body>
                            Cartão de Crédito, débito, PIX e boleto bancário.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Garantia</Accordion.Header>
                        <Accordion.Body>
                            Em caso de defeito, a garantia cobre 60 dias desde a data da compra.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>

    )

}
