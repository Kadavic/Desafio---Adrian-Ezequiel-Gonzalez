/*const estilos = {
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
export default ItemListContainer; */
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import GetFetch from "../data/data";
import { ItemList } from "../itemList/itemList";


export const ItemListContainer =()=>{
    const [data, setData] = useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        GetFetch
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return(
    <div className="tarjeta">
        <ItemList data={data} loading={loading}/>
    </div>
        
    
)}

