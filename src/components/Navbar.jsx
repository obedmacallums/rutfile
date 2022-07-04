import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { Navbar as NavbarF, Avatar, Dropdown } from "flowbite-react";
import NavbarCustomLink from "./NavbarCustomLink";

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  let location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleClickLogut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  const handleClickProfile = () => {
    navigate("profile");
    setValue((value) => value + 1);
  };

  return (
    <>
      <NavbarF fluid={true} rounded={true}>
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
          {user && (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  size="sm"
                  img={user.photoURL ? user.photoURL : ""}
                  rounded={true}
                />
              }
              key={value}
            >
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={handleClickProfile}>Perfil</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleClickLogut}>
                Cerrar Sesion
              </Dropdown.Item>
            </Dropdown>
          )}

          <NavbarF.Toggle />
        </div>

        <NavbarF.Collapse>
          {user ? (
            <>
              <NavbarCustomLink
                to="/"
                text="Inicio"
                active={location.pathname === "/" ? true : false}
              />

              <NavbarCustomLink
                to="/search"
                text="Busqueda"
                active={location.pathname === "/search" ? true : false}
              />

              <NavbarCustomLink
                to="/about"
                text="Nosotros"
                active={location.pathname === "/about" ? true : false}
              />

              {location.pathname === "/profile" && (
                <NavbarCustomLink
                  to="/profile"
                  text="Perfil"
                  active={location.pathname === "/profile" ? true : false}
                />
              )}
            </>
          ) : (
            <>
              <NavbarCustomLink
                to="/login"
                text="Login"
                active={location.pathname === "/login" ? true : false}
              />

              <NavbarCustomLink
                to="/register"
                text="Registro"
                active={location.pathname === "/register" ? true : false}
              />

              <NavbarCustomLink
                to="/about"
                text="Nosotros"
                active={location.pathname === "/about" ? true : false}
              />
            </>
          )}
        </NavbarF.Collapse>
      </NavbarF>
    </>
  );
};

export default Navbar;
