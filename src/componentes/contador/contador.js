import {useState} from 'react';
import Button from 'react-bootstrap/Button';
//hook

function Contador({stock, initial,onAdd}){
    //const handlers=useState(0)
    const [contador, setContador] = useState(initial)
    const [tope, setTope] =useState(stock)

    function agregarAlContador(){
        //handlers[1](handlers[0]+1)
        {contador>=tope ? <button disabled={true}></button> : setContador(contador + 1)}
        console.log(tope)
        console.log(contador)
    }

    function descontarAlContador(){
        {contador<2 ? <button disabled={true}></button> : setContador(contador - 1)}
    }

    return(
        <div className='contador'>
            <div className='botones'>
                <Button variant="dark" className='agregarQuitar' onClick={agregarAlContador}>Agregar</Button>
                
                <p className='contador'>
                    {contador}
                </p>
                <Button variant="dark" className='agregarQuitar' onClick={descontarAlContador}>Quitar</Button>
            </div>
            <div>
                <Button variant="dark" className='compra' onClick={onAdd}>Agregar al carrito</Button>
            </div>
        </div>
    )

}
/*
1 Montado/mount - Renderiza el componente
2 Actualizacion/update:
    espera alguna modificacion o cambio en el estado
    cuando detecta cambio en el estado entonces procesa el cambio
    re-renderiza y muestra el nuevo layout(con el nuevo estado)
3desmonta/unmounted    
*/
export default Contador