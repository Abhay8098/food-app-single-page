import logo from './logo.svg';
import './App.css';
import ShoppingCart from './shoppingCart/ShoppingCart';
import Navbar from './shoppingCart/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './shoppingCart/checkout';

function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route element={<Navbar/>}>
      <Route path='/' element={<ShoppingCart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
