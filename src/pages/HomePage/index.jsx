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
   const [search, setSearch] = useState("")


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

   const addToCart = (newProduct) => {
   
      if(cartList.some ((product) => product.id === newProduct.id)){
         toast.info("Este item ja foi adicionado!")
      } else {
         setCartList([...cartList,newProduct])
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
      toast.success("Produtos removidos com sucesso!")
   }
   

   useEffect(() => {
      if (cartList.length > 0){
         localStorage.setItem("@Products", JSON.stringify(cartList))
      }
   },[cartList])



   const researchList =  productList.filter((product) => product.name.toUpperCase().includes(search.toUpperCase()))


   const renderResearchList = search ? researchList : productList;


   

   return (
      <>
         <Header 
         value = {value}
         setValue={setValue}
         setIsOpen={setIsOpen}
         setCount= {setCount}
         setSearch={setSearch}
         cartList={cartList}
         />
         <main>
            <ProductList 
            renderResearchList = {renderResearchList}
            addToCart = {addToCart}
             />
            {isOpen?
            <CartModal
            setCount={setCount}
            count={count}
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
