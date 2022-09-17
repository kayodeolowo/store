import React from 'react'
import products from '../Data'
import ProductCard from '../components/ProductCard'


const Home = () => {
  return (
    <div>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/> 
            ))}
    </div>
  )
}

export default Home