import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {CartProvider} from './CartContext'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";


function App() {
  return (
    <div>
      <CartProvider> 
        <BrowserRouter> 
           <Navbar/>
              <Routes> 
                  <Route path="/" element={<Home/>}/>
                   <Route path="/cart" element={<Cart/>}/>

              </Routes>
           
        </BrowserRouter>
          
      </CartProvider>
     
    </div>
  );
}

export default App;
