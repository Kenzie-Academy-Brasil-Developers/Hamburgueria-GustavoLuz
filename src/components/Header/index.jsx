import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"

export const Header = ({value, setValue, setIsOpen, setSearch, cartList}) => {
   
   const openModal = () => setIsOpen(true)

   const submit = (event) => {
      event.preventDefault()
      setSearch(value)
      setValue("")

   }

   return (

      <header className={style.header} >
         <div className="container">
            <div className={style.flexbox}>
               <div className={style.logoContainer} >
                  <img src={Logo} alt="Logo Kenzie Burguer" />
                  <button className= {style.cart} onClick={() => openModal()}>
                     <MdShoppingCart size={21} />
                     <span>{cartList.length}</span>
                  </button>
               </div>
               <div >
                  <form onSubmit={submit} >
                     <input
                        type="text"
                        value={value}
                        placeholder="Digitar pesquisa"
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <button type="submit">
                        <MdSearch size={15} />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </header>

   );
};
