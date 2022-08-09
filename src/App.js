
import './App.css';
import Container from './componentes/container/container';
import Navegador from './componentes/navBar/navbar';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Container/>
      <Navegador/>
      <div className='productos'>
        <div>
          <ItemListContainer/>
          
        </div>
        
      </div>
    </div>
  );
}
export default App;
