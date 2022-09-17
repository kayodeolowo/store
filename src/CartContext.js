import { createContext, useState } from "react";

const CartContext = createContext ();

export function CartProvider ({children}) {
  
    const [items, setItems] = useState ([]);

    const addtocart = (name,price)=> {

        setItems((prevState)=>[...prevState, {name,price}])
    } 

    return (
        <CartContext.Provider value={{items, addtocart}}> {children} 
        </CartContext.Provider> 
    )
}

export default CartContext;