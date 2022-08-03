import  React from "react"
export const ItemList = (data, loading) =>{
console.log(data)



return(
    <>
        {
        loading ? <h2>Cargando..</h2>: data.map(juegos => <li key={juegos.id}>{juegos.id} {juegos.nombre} <img src={juegos.img}/></li>)
        }
    </>
    )
}