
import CartWidget from '../cartwidget/cartWidget';
import { NavLink } from 'react-router-dom';

function Navegador() {
  return (
    <div className='navegacion'>
    
      
      
      
      <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined} to="/">Home</NavLink>
      

      
      <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined} to="/juegos">Juegos</NavLink>
      

      
      <NavLink className={({isActive}) => isActive ? 'pagina-activa' : undefined} to="/AboutUs">About Us</NavLink>
      
      
      
        
      
    
    </div>
  );
}

export default Navegador;