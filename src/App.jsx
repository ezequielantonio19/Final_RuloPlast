import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import CartWidget from "./componentes/CartWidget/CartWidget"

const App = () => {
  return (
    <div>

      
<NavBar/>


<ItemListContainer greeting = {"Los envases que necesitás"} />
    </div>
  )
}

export default App
