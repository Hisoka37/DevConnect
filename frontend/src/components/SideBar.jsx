import { Link } from "react-router-dom";

import { IoHome, IoLogIn } from "react-icons/io5"
import { IoIosCreate } from "react-icons/io"
import { FcLike } from "react-icons/fc";
import { MdExplore } from "react-icons/md";
import Logout from "./Logout";


const SideBar = () => {
    const authUser = true;

  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen  py-8
        overflow-y-auto border-r  w-full bg-gray-0 rounded-md bg-glass 
        
    "
    >
        <nav className="h-full flex flex-col gap-3">
            <Link to= '/' className ="flex justify-center">
                <img className="h-8" src="/github.svg" alt="Github Logo" />
            </Link>

            <Link to= '/' 
                className =" p-2 flex justify-center  transition-colors duration-200 rounded-lg hover:bg-gray-800">
                <IoHome  size ={20} />
            </Link>

            {!authUser && (
                <Link to= '/likes' 
                className =" p-2 flex justify-center  transition-colors duration-200 rounded-lg hover:bg-gray-800">
                <FcLike  size ={20} />
            </Link>
            )}
            {authUser && (
                <Link to= '/explore' 
                className =" p-2 flex justify-center  transition-colors duration-200 rounded-lg hover:bg-gray-800">
                <MdExplore  size ={20} alt="" />
            </Link>
            )}
            {authUser && (
                <Link to= '/login' 
                className =" p-2 flex justify-center  transition-colors duration-200 rounded-lg hover:bg-gray-800">
                <IoLogIn  size ={20} />
            </Link>
            )}
            {authUser && (
                <Link to= '/signup' 
                className =" p-2 flex justify-center  transition-colors duration-200 rounded-lg hover:bg-gray-800">
                <IoIosCreate    size ={20} />
            </Link>
            )}

            {authUser && (
                <div className='flex flex-col gap-2 mt-auto'>
                <Logout />
            </div>
            )}
        </nav>
    </aside>
  );
};

export default SideBar;
