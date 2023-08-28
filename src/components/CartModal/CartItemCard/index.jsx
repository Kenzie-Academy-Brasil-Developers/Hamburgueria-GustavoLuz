import { MdDelete } from "react-icons/md";
import style from "./style.module.scss"

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li>
         <div>
            <div className={style.productCard}>
               <img src={product.img} alt={product.name} />
               <h3>{product.name}</h3>
            </div>
            <button>+</button>
            <button onClick={() => removeFromCart(product.id)} aria-label="delete" title="Remover item">
               <MdDelete size={21} />
            </button>
            <button>-</button>
         </div>

      </li>
   );
};
