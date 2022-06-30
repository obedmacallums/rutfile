import { Outlet } from "react-router-dom"


const FormLayoutContainer = () => {
  return (
    <div className="w-96 mx-auto mt-20">

    <Outlet/>
   
    </div>
  )
}

export default FormLayoutContainer