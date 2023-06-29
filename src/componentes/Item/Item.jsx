import { Link } from "react-router-dom"
import "./Item.css"


const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img className="imgProducto" src={img} alt={nombre} />
        <h3>nombre: {nombre}</h3>
        <p>precio: {precio}</p>
        <p>ID: {id}</p> 
        <Link to= {`/Item/${id}`}> Ver más </Link>
    </div>
  )
}

export default Item