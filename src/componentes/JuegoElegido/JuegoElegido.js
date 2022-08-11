export default function JuegoElegido({detalles,id, categoria, precio, cantidad}){
    return(
        <div> 
            <div><p className="detalles">{detalles}</p></div>
            <div><p className="detalles">Categoría: {categoria}</p></div>
            <div><p className="detalles">Precio: USD {precio}</p></div>
            <div><p className="detalles">Stock: {cantidad}</p></div>
        </div>  
    )
}