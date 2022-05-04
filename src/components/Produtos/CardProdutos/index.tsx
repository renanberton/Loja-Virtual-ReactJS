/* Tipagem para os atributos do cardProdutos */
type cardProps = {
    img: string,
    name: string,
    dimensions: string,
    weight: string,
    price: string,
}

export function CardProdutos({ img, name, dimensions, weight, price }: cardProps) {
    return (
        <div className="cardProduto">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>Dimensões</h2>
            <p>{dimensions}</p>
            <h2>Peso</h2>
            <p>{weight}</p>
            <h4>{price}</h4>
            <span>Em até 12x no cartão</span>
            <button className="btnComprar">Comprar</button>
            <button className="btnCarrinho">Adicionar ao Carrinho</button>
        </div>
    )
}

export default CardProdutos;