import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs';


const Navbar = () => {
   
  return (
   <nav className='bg-blue-200'> 
        <div className=' flex h-10 pt-4'> 
            <div className=''>
                <h1 className='ml-10'> store </h1>
            </div> 
          
            <div className='flex ml-20'> 
                  <h1> <BsCart4/>  </h1>
                  <h2 className='ml-4'>0 </h2>
                 
            </div>
        </div>
   </nav>
  )
}

export default Navbar