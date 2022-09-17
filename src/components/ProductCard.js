 import React, { useContext } from 'react'
 import CartContext from '../context/CartContext'
 
 const ProductCard = ({product}) => {
    const {addToCart } = useContext(CartContext)
   return (
     <div>
        <div> 
            <img className='h-20' src={product.image} alt=''/>
            <h2> {product.name}</h2>
             <h2> ${product.price}</h2>

             <button onClick={()=>addToCart(product)} >Add to cart </button>
        </div>
     </div>
   )
 }
 
 export default ProductCard