import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartWidget from './components/CartWidget';
import Checkout from './components/Checkout';
import CheckoutUseForms from './components/CheckoutUseForms';
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a Urban Suplementos" />} />
          <Route path='/categories/:category' element={<ItemListContainer greeting="Categoría: " />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartWidget />} />
          <Route path='/checkout' element={<CheckoutUseForms />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
