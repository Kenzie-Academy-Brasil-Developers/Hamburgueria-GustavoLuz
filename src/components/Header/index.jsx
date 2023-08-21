import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"

export const Header = ({value, setValue, setIsOpen, research}) => {
   const openModal = () => setIsOpen(true)

   return (

      <header className={style.header} >
         <div className="container">
            <div className={style.flexbox}>
               <div className={style.logoContainer} >
                  <img src={Logo} alt="Logo Kenzie Burguer" />
                  <button className= {style.cart} onClick={() => openModal()}>
                     <MdShoppingCart size={21} />
                     <span>0</span>
                     {/* <span>{cartList.length}</span> */}
                  </button>
               </div>
               <div >
                  <form>
                     <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Digitar pesquisa"
                     />
                     <button type="submit" 
                     onClick={(event) => {
                        event.preventDefault()
                        // research(value)
                     }}>
                        <MdSearch size={15} />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </header>

   );
};
