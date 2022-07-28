import Nav from 'react-bootstrap/Nav';
import CartWidget from '../cartwidget/cartWidget';


function Navegador() {
  return (
    <div className='navegacion'>
    <Nav  variant="pills" defaultActiveKey="/home">
      

      <Nav.Item className='item'>
        <Nav.Link eventKey="link-1" >Categorias</Nav.Link>
      </Nav.Item>

      <Nav.Item className='item'>
        <Nav.Link eventKey="link-2">Ofertas</Nav.Link>
      </Nav.Item>

      <Nav.Item className='item'>
        <Nav.Link eventKey="link-3">
          Ingresa
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='item'>
        <CartWidget/>
      </Nav.Item>
      
    </Nav>
    </div>
  );
}

export default Navegador;