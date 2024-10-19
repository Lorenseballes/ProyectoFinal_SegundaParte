import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navegacion';
import Footer from './Componentes/Footer';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Alta from './Pages/Alta';
import Contacto from './Pages/Contacto';
import Nosotros from './Pages/Nosotros';
import Ecommerce from './Pages/Ecommerce';
import Carrito from './Componentes/Carrito';


function App() {
  return (
  <>
  <Navegacion/>
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/alta' element={<Alta />} />
    <Route path='/contacto' element={<Contacto />} />
    <Route path='/nosotros' element={<Nosotros />} />
    <Route path='/ecommerce' element={<Ecommerce />} />
    <Route path='/carrito' element={<Carrito />} />



    </Routes>

  <Footer/>
  </>
  );
}

export default App;
