
import { Link } from 'react-router-dom'



const NavbarCustomLink = ({to, text, active, id}) => {

if (active) {

    return <Link to={to} 
    className="block py-2 pr-4 pl-3 md:p-0 bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700"
    id={id}
    >{text}</Link>

}
return <Link to={to} 
className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
id={id}
>{text}</Link>

}


export default NavbarCustomLink