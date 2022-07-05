import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { Outlet } from "react-router-dom"

const RequireAuthLayout = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (

    <div className="container mx-auto">

    <Outlet/>
   
    </div>

  );
};

export default RequireAuthLayout;
