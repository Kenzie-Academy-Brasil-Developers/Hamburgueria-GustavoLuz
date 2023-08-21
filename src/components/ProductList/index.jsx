import { ProductCard } from "./ProductCard";
import style from "./style.module.scss"

export const ProductList = ({ productList, addToCart }) => {
   return (
      <div className="container">
      <ul className= {style.flexContainer} >
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addToCart = {addToCart} />
         ))}
      </ul>
      </div>
   );
};
