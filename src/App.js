import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path= '/' element={<ItemListContainer greeting={'Bienvenidos a Potus Tienda'} />}/>
          <Route exact path= '/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route exact path="/itemDetail/:itemId" element={<ItemDetailContainer />} />
          <Route exact path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;