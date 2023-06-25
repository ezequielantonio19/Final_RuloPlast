import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import CartWidget from "./componentes/CartWidget/CartWidget"
import Home from "./componentes/Home/Home"

import Potes from "./componentes/Potes/Potes"

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
            
          <Route path="/potes" element={<Potes/>}/>
          <Route path="*" element={<h2>Esta sección aún no está disponible</h2>}/>
        </Routes>


        <ItemListContainer greeting={"Los envases que necesitás"} />
      </BrowserRouter>
    </div>
  )
}

export default App
