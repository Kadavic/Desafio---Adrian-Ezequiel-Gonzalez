
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Juegos from './pages/Juegos';
import DetallesDeJuegos from './componentes/ItemDetails/ItemDetails';
import Juego from './pages/DetalleDeUnJuego';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Juegos' element={<Juegos/>}/>
        <Route path='/Juegos/:id' element={<Juego/>}/>
      </Routes>
      
      
      <div className='productos'>
        <div>
          
        </div>
      </div>
    </div>
  );
}
export default App;
