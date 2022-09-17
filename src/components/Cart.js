import React, { useContext } from 'react'
import CartContext from '../CartContext'


const Cart = () => {
const {items} = useContext (CartContext);

  return (
    <div>
        <div> 
            <h1> cart </h1>
            <div className=''> 
                {items.map((item)=> (
                   <div className='flex '> 
                        <h2>{item.name} </h2>
                        <h2 className='ml-2'>{item.price} </h2> 
                     </div>
                ))}    
            </div> 
        </div>
    </div>
  )
}

export default Cart