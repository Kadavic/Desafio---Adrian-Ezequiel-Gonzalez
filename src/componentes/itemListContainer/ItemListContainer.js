const estilos = {
    borderColor:'black',
    borderStyle:'solid',
    margin:'20px',
    display:'inline',
    padding:'2rem',
    fontSize:'2rem',
}


function ItemListContainer(props){
    return(
        <div style={estilos}>
            {props.texto}
        </div>
    )
}
export default ItemListContainer; 