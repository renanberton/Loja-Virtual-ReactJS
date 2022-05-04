/* Componentes */
import { Header } from '../../components/header/index';
import { Footer } from '../../components/footer/index';
import { CardProdutos } from '../../components/Produtos/CardProdutos/index';

/* Estilo */
import './style.scss';

/* Imagens */
import BolsaBlack from './imgs/bolsa-black.png';
import BolsaGray from './imgs/bolsa-cinza.png';
import BolsaBlue from './imgs/bolsa-blue2.png';
import BolsaPreta from './imgs/bolsa-preta.png';
import BolsaGreen from './imgs/bolsa-green.png';
import BolsaCinza from './imgs/bolsa-cinza.png';

const Produto1 = [
    {
        name: "Bolsa Black",
        img: BolsaBlack,
        dimensions: "40cm x 20cm",
        weight: '1kg',
        price: 'R$ 250,00'
    },
    {
        name: "Bolsa Gray",
        img: BolsaGray,
        dimensions: "20cm x 20cm",
        weight: '0.5kg',
        price: 'R$ 150,00'
    },
    {
        name: "Bolsa Blue",
        img: BolsaBlue,
        dimensions: "20cm x 20cm",
        weight: '0.5kg',
        price: 'R$ 150,00'
    },
    {
        name: "Bolsa Preta",
        img: BolsaPreta,
        dimensions: "50cm x 15cm",
        weight: '0.2kg',
        price: 'R$ 350,00'
    },
    {
        name: "Bolsa Green",
        img: BolsaGreen,
        dimensions: "30cm x 45cm",
        weight: '0.5kg',
        price: 'R$ 300,00'
    },
    {
        name: "Bolsa Cinza",
        img: BolsaCinza,
        dimensions: "20cm x 25cm",
        weight: '0.5kg',
        price: 'R$ 320,00'
    }
]

export function Produtos() {
    return (
        <div>
            <Header />
            <h1>Confira nossos produtos</h1>
            <div className='produtos'>
                {Produto1.map((produtos) =>
                    <CardProdutos
                        name={produtos.name}
                        img={produtos.img}
                        dimensions={produtos.dimensions}
                        weight={produtos.weight}
                        price={produtos.price}
                    />
                )}
            </div>
            <Footer />
        </div>
    )
}

