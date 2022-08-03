
import './App.css';
import Container from './componentes/container/container';
import Navegador from './componentes/navBar/navbar';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';
import Contador from './componentes/contador/contador';
import { ItemList } from './componentes/itemList/itemList';
import GetFetch from './componentes/data/data';

function App() {
  
  
  return (
    <div className="App">
      
      
      <Container/>
      <Navegador/>
      <div className='productos'>
        <div>
          <ItemListContainer/>
          <Contador stock={5} initial={1}/>
        </div>
        <div>
          <ItemListContainer/>
          <Contador stock={5} initial={1}/>
        </div>
        <div>
          <ItemListContainer/>
          <Contador stock={5} initial={1}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
