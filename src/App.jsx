
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import CartWidget from './components/CartWidget';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Urban Suplementos" />} />
          <Route path='/categories/:category' element={<ItemListContainer greeting="Categoría: " />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartWidget/> } />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
