import style from "./style.module.scss"

export const ProductCard = ({ product, addToCart }) => {
 
    return(
        <li className={style.containerCard} >
            <div className={style.containerImg}>
            <img src={product.img} alt={product.name} />
            </div>
            <div className={style.containerDiv}>
                <h3 className="title1">{product.name}</h3>
                <span className={style.category}>{product.category}</span>
                <span className={style.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}