import  React from "react"
import { Link } from "react-router-dom"
import Contador from "../contador/contador"
import DetallesDeJuegos from "../ItemDetails/ItemDetails"
import Button from "react-bootstrap/esm/Button"

export const ItemList = ({data, loading}) =>{
return(
    <div className="juegos">
        {
        loading ? <h2>Cargando..</h2>: data.map(juegos => 
        <div className="ficha" key={juegos.id}>
            <div>
                <p className="juegoNombre">{juegos.nombre}</p>
            </div> 
            <div className="juego">
                <img src={juegos.img} alt={juegos.nombre} width={250} height={250}/>
            </div>
            <div  className="juego">
                <Link to = {`/juegos/${juegos.id} `} ><Button>Detalles</Button></Link>
                
            </div>
            
            <div>
                
            </div>  
            <div className="juego">
                <Contador stock={juegos.stock} initial={1}/>
            </div> 
        </div>
        )}
        
    </div>
    )
}