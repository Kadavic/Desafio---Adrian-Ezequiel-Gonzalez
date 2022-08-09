import {useState} from 'react';
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
        
        console.log(contador)
    }

    return(
        <div className='contador'>
            <div className='botones'>
                <button className='agregarQuitar' onClick={agregarAlContador}>Agregar</button>
                
                <p className='contador'>
                    {contador}
                </p>
                <button className='agregarQuitar' onClick={descontarAlContador}>Quitar</button>
            </div>
            <div>
                <button className='compra' onClick={onAdd}>Agregar al carrito</button>
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