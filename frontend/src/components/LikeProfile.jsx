import { FcLike } from "react-icons/fc";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.jsx"

const LikeProfile = ( { userProfile })  => {
    const {authUser} = useAuthContext()
    const isOwnProfile = authUser?.username === userProfile.login;

    const handleLikePofile =  async () => {
            try {
                const res = await fetch(`/api/users/like/${userProfile.login}`, {
                    method: "POST",
                    credentials: 'include'
                })
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                toast.success(data.message)
                 
            } catch (error) {
                toast.error(error.message)
            }
    }

    if(!authUser || isOwnProfile) return null

  return (
    <button
			className='p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2'
			onClick={handleLikePofile}
		>
			<FcLike  size ={20} /> Like Profile
	</button>
  )
}

export default LikeProfile