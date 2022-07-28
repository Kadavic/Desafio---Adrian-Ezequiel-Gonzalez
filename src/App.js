
import './App.css';
import Container from './componentes/container/container';
import Navegador from './componentes/navBar/navbar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      
      <Container/>
      <Navegador/>
      <ItemListContainer texto={'producto1'}/>
      <ItemListContainer texto={'producto2'}/>
      <ItemListContainer texto={'producto3'}/>
    </div>
  );
}

export default App;
