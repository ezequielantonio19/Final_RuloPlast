import { useState, useEffect } from "react"
import { getEnvase } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [envase, setEnvase] = useState (null);

  useEffect (() =>{
    getEnvase(4)
    .then(res => setEnvase(res))
    
  }, []
  )
  return (
    <div><ItemDetail {...envase} /></div>
  )
}

export default ItemDetailContainer