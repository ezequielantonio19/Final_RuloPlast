import React from 'react'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h3>nombre: {nombre}</h3>
        <p>precio: {precio}</p>
        <p>ID: {id}</p> 
        <button> Ver más </button>
    </div>
  )
}

export default Item