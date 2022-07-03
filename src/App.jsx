import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Login from "./routes/Login"

import Register from "./routes/Register"
import { useContext } from "react"
import { UserContext } from "./context/UserProvider"
import FormLayout from "./layouts/FormLayout"
import NotFound from "./routes/NotFound"
import RequireAuthLayout from "./layouts/RequireAuthLayout"
import Perfil from "./routes/Perfil"



const App = ()=> {

  const {user} = useContext(UserContext)
  if (user === false){

    return (
      <p>Loading...</p>

    )
  }

  return (
    <>
    <Navbar/>
    <Routes>
    
      <Route path="/" element={<RequireAuthLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
      </Route>


      <Route path="/" element={<FormLayout/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
      
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
    </>
  )
}

export default App
