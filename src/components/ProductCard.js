 import React, { useContext } from 'react'
 import CartContext from '../context/CartContext'
 
 const ProductCard = ({product}) => {
    
   return (
     <div>
        <div> 
            <img className='h-20' src={product.image} alt=''/>
            <h2> {product.name}</h2>
             <h2> ${product.price}</h2>

             <button >Add to cart </button>
        </div>
     </div>
   )
 }
 
 export default ProductCard