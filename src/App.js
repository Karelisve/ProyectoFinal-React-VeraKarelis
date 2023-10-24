import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto/Contacto';
import Checkout from './components/Checkout/Checkout';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route exact path= '/' element={<ItemListContainer greeting={'Bienvenidos a Potus Tienda'} />}/>
          <Route exact path= '/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route exact path= '/itemDetail/:itemId' element={<ItemDetailContainer />} />
          <Route exact path= '/cart' element={<Cart/>}/>
          <Route exact path= '/contacto' element={<Contacto/>}/>
          <Route exact path= '/checkout' element={<Checkout/>}/>
          <Route exact path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;