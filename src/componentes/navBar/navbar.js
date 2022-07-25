import Nav from 'react-bootstrap/Nav';

function PillsExample() {
  return (
    <div className='navegacion'>
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Categorias</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Ofertas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="ingresa">
          Ingresa
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default PillsExample;