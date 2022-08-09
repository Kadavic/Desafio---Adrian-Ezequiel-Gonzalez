import { useState } from "react"



function DetallesDeJuegos({detalles,key,categoria,precio,cantidad}) {
    const [isShown, setIsShown] = useState(false)
    
    
    function mostrar(){
        setTimeout(() =>{
            setIsShown(current => !current)},2000)
        
        
    }
    return(
        <div>
                <button onClick={mostrar}>Detalles del juego</button>
                {isShown && (<div key={key}> 
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