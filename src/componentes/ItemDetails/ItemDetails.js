import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"



function DetallesDeJuegos({detalles,id,categoria,precio,cantidad}) {
    const [isShown, setIsShown] = useState(false)
    
    
    function mostrar(){
        setTimeout(() =>{
            setIsShown(current => !current)},2000)
        
        
    }
    return(
        <div>    <Link  to = {`/juegos/${id} `}>
                <Button variant="danger" onClick={mostrar}>Detalles del juego</Button>
                </Link>
                {isShown && (<div key={id}> 
                                    <div><p className="detalles">{detalles}</p></div>
                                    <div><p className="detalles">Categoría: {categoria}</p></div>
                                    <div><p className="detalles">Precio: USD {precio}</p></div>
                                    <div><p className="detalles">Stock: {cantidad}</p></div>
                            </div>
                    )}
            
        </div>
    )
}
export default DetallesDeJuegos