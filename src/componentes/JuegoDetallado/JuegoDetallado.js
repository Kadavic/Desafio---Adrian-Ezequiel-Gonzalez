import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetJuegoPorID } from "../data/data"
import JuegoElegido from "../JuegoElegido/JuegoElegido"

/*export default function JuegoDetallado(){

    
    const [juego,setJuego] = useState()   
    const {id} = useParams()

    useEffect(() => {
        GetJuegoPorID(id)
        .then(resp => {setJuego(resp)
        })
        .catch(error => {
            console.log(error)
        })
    }, [id])
    console.log(juego)
    return(<div></div>)
} */
const JuegoDetallado = () => {
    const [juego,setJuego] = useState()
    const {id} = useParams()
    useEffect(() => {
            GetJuegoPorID(id)
            .then((juego) => setJuego(juego))
            .catch(error => console.log(error))
    }, [id])
    return (
        <div>
            <JuegoElegido juego={juego}/>
        </div>
    )
 }
 export default JuegoDetallado