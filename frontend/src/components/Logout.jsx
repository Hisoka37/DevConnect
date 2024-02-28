import { MdLogout } from "react-icons/md";


const Logout = () => {
  return (
    <>
        <img src='../../public/logo.png' alt="" className="w-10 rounded-full border border-gray-800" />

        <div to='/logout' className="cursor-pointer flex items-center p-2 transition-colors duration-200 bg-glass mt-auto rounded-lg hover:bg-gray-800">
            <MdLogout size={20}/>
        </div>
    </>
  )
}

export default Logout