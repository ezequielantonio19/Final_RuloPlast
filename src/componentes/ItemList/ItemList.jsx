import Item from "../Item/Item"


const ItemList = ({envases}) => {
  return (
    <div classsName="contenedorEnvases">
        {envases.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList