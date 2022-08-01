
import './App.css';
import Container from './componentes/container/container';
import Navegador from './componentes/navBar/navbar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import Contador from './componentes/contador/contador';

function App() {
  return (
    <div className="App">
      
      
      <Container/>
      <Navegador/>
      <div className='productos'>
        <div>
          <ItemListContainer texto={'producto1'}/>
          <Contador stock={5} initial={1}/>
        </div>
        <div>
          <ItemListContainer texto={'producto2'}/>
          <Contador stock={5} initial={1}/>
        </div>
        <div>
          <ItemListContainer texto={'producto3'}/>
          <Contador stock={5} initial={1}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
