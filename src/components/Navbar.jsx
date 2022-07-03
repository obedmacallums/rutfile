import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import {Navbar as NavbarF, Avatar, Dropdown} from "flowbite-react" 


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
      <NavbarF
  fluid={true}
  rounded={true}
>
  <NavbarF.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavbarF.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <NavbarF.Toggle />
  </div>
  <NavbarF.Collapse>
    <NavbarF.Link
      href="/navbars"
      active={true}
    >
      Home
    </NavbarF.Link>
    <NavbarF.Link href="/navbars">
      About
    </NavbarF.Link>
    <NavbarF.Link href="/navbars">
      Services
    </NavbarF.Link>
    <NavbarF.Link href="/navbars">
      Pricing
    </NavbarF.Link>
    <NavbarF.Link href="/navbars">
      Contact
    </NavbarF.Link>
  </NavbarF.Collapse>
</NavbarF>

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
