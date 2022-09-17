import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs';
import CartContext from '../CartContext';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const {items} = useContext (CartContext);
    
   
  return (
   <nav className='bg-blue-200'> 
        <div className=' flex h-10 pt-4'> 
        
            <div className=''>
              <Link to={"/"}> 
                     <h1 className='ml-10'> store </h1>
              </Link>
               
            </div> 
          <Link to={"/cart"}> 
                <div className='flex ml-20'> 
                  <h1> <BsCart4/>  </h1>
                  <h2 className='ml-4'>{items.length} </h2>
                 
            </div>
          </Link>
            
        </div>
   </nav>
  )
}

export default Navbar