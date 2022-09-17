import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs';
import CartContext from '../context/CartContext';

const Navbar = () => {
    const {cartItems} = useContext(CartContext)
  return (
   <nav> 
        <div> 
            <div>
                <h1> store </h1>
            </div> 
            <input className='border-red-400 border-2' type='text'/> 
            <div> 
                  <h1> <BsCart4/> </h1>
                  {cartItems.length > 0 && (
                  <div> <span>  {cartItems.length} </span>  </div>) }
            </div>
        </div>
   </nav>
  )
}

export default Navbar