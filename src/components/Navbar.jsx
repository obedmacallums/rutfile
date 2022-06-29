import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const handleClickLogut = async ()=>{
    try {
      await signOutUser()
      
    } catch (error) {
      console.log(error.code)
    }

  }

  return (
    <>
      <div>
        {
          user ? (
            <>
            <NavLink to="/">Home</NavLink>|
            <button onClick={handleClickLogut}>Logout</button>
            </>
            
          ):
          
          (
            <>
            <NavLink to="/login">Login</NavLink> |
            <NavLink to="/register">Register</NavLink>
            </>

          )


        }





      </div>
    </>
  );
};

export default Navbar;
