
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemCount from './components/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 console.log("App");
 
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a Urban Suplementos"/>
      <ItemCount/>
    </>
  )
}

export default App
