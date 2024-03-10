import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/auth";
import toast from "react-hot-toast";



const Logout = () => {
  const {authUser, setAuthUser} = useAuthContext()
  const handleLogout = async() => {
      try {
        const res = await fetch ('/api/auth/logout', {credentials: "include"})
        const data = await res.json()
        setAuthUser(null)
      } catch (error) {
          toast.error(error.message)
      }
  }
  return (
    <>
        <img src={authUser?.avatarUrl} alt="" className="w-10 rounded-full border border-gray-800" />

        <div to='/logout' className="cursor-pointer flex items-center p-2 transition-colors duration-200 bg-glass mt-auto rounded-lg hover:bg-gray-800"
        onClick={handleLogout}
        >
            < MdLogout size={20}/>
        </div>
    </>
  )
}

export default Logout