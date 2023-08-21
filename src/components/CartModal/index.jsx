import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss"

export const CartModal = ({ productList, count, setCount, cartList, removeFromCart, removeAllFromCart , setIsOpen }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const closeModal = () => setIsOpen(false);

   return (
      <div className={style.modal} role="dialog">
         <div className={style.modalContainer}>
            <div className={style.headerModal}>
            <h2 className="title1">Carrinho de compras</h2>
            <button aria-label="close" title="Fechar" onClick={() => closeModal()} >
               <MdClose size={18} />
            </button>
            </div>
            <div className="container">
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div className="container">
               <div className={style.textContainer}>
                  <span>Total </span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={style.removeAllButton} onClick={removeAllFromCart}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
