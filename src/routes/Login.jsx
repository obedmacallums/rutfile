import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import {useNavigate} from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState('obedmacallums@gmail.com')
  const [password, setPassword] = useState('12345678')
  const{loginUser} = useContext(UserContext)
  const navigate = useNavigate()


  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
        await loginUser(email, password)
        navigate('/')


      

        
    } catch (error) {
        console.log(error.code)
        
    }
     

}

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder= "ingrese su Email"
                
        />
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder= "ingrese su password"
                
        />
        <button type="submit">Iniciar</button>



    </form>



    </>
  );
};

export default Login;
