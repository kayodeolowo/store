 import React, { useContext } from 'react'
 import CartContext from '../CartContext'
 
 const ProductCard = ({product}) => {
  const {addtocart} = useContext(CartContext)
    
   return (
     <div>
        <div> 
            <img className='h-20' src={product.image} alt=''/>
            <h2> {product.name}</h2>
             <h2> ${product.price}</h2>

             <button onClick={()=> addtocart(product.name, product.price )} >Add to cart </button>
        </div>
     </div>
   )
 }
 
 export default ProductCard