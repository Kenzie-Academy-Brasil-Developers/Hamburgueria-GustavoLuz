import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgerApi } from "../../components/Services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [count, setCount] = useState(0);
   const [value, setValue] = useState("");


   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {
      const getProducts = async () => {
         try {
            setLoading(true)
            const { data } = await burgerApi.get("/products")
            setProductList(data)
         } catch (error) {
            console.log(error)
         } finally{
            setLoading(false)
         }
      }
       getProducts()
   },[])

   // adição, exclusão, e exclusão geral do carrinho

   const addToCart = (newProduct) => {
      if(cartList.includes ((product) => product.id === newProduct.id)){
         toast.info("Este item ja foi adicionado!")
      } else {
         setCartList[[...cartList, newProduct]]
         toast.success("Item adicionado com sucesso!")
      }
   }

   const removeFromCart = (productToBeRemoved) => {
      const newList = cartList.filter((product) => product.id !== productToBeRemoved)
         setCartList(newList)
         toast.success("Produto removido com sucesso!")
      }
   
   const removeAllFromCart = () => {
      setCartList([])
      toast.success("Produto removido com sucesso!")
   }
   
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)

   useEffect(() => {
      if (cartList.length > 0){
         localStorage.setItem("@Products", JSON.stringify(cartList))
      }
   },[cartList])

   // renderizações condições e o estado para exibir ou não o carrinho


   // filtro de busca

   const research = productList.filter((product) => product.name.toUpperCase().includes(value.toUpperCase()))

   // estilizar tudo com sass de forma responsiva
   
   

   return (
      <>
         <Header 
         setIsOpen={setIsOpen}
         setCount= {setCount}
         research={research}
         />
         <main>
            <ProductList 
            productList = {productList}
            addToCart = {addToCart}
           

             />
            {isOpen?
            <CartModal
            cartList={cartList}
            setIsOpen={setIsOpen}
            removeFromCart={removeFromCart}
            removeAllFromCart={removeAllFromCart}
         /> : null}
           
            <ToastContainer position="bottom-right" autoClose={3 * 1000} />
         </main>
      </>
   );
}
