export default function JuegoElegido({juego}){
    console.log(juego)
    return(
        <div>
            
            {
               
                    <div key={juego.id}> 
                        <div><p className="detalles">{juego.detalles}</p></div>
                        <div><p className="detalles">Categoría: {juego.categoria}</p></div>
                        <div><p className="detalles">Precio: USD {juego.precio}</p></div>
                        <div><p className="detalles">Stock: {juego.cantidad}</p></div>
                    </div> 
            }
            
        </div>     
    )
}