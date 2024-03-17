import { FaGithubAlt } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { FaLocationCrosshairs, FaXTwitter } from "react-icons/fa6";
import { RiGitRepositoryFill } from "react-icons/ri";
import { SlUserFollow, SlUserFollowing  } from "react-icons/sl"
import { formatMemberSince } from "../utils/timeFormat";
import LikeProfile from "./LikeProfile";


const ProfileInfo = ({userProfile}) => {
	const memeberSince = formatMemberSince(userProfile?.created_at)
  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
        <div className="bg-glass rounded-lg p-4">
            {/* Github View */}
            <div className="flex gap-4 items-center">
                <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
                    <img src={userProfile?.avatar_url}  className="rounded-md w-24 h-24 mb-2" />
                </a>
                <div className='flex gap-2 items-center flex-col'>
				<LikeProfile userProfile={userProfile}/>
						<a
							href={userProfile?.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaGithubAlt size={18} />
							View on Github
						</a>
				</div>
            </div>

            {/* User Bio  */}
            {userProfile?.bio ? (
                <div className="flex gap-2">
                    <TfiThought size={30} />
                    <p className="text-sm"> {userProfile?.bio.substring(0, 100)}...</p>
                </div>
            ) : null}

            {/* User Location */}
            {userProfile?.location ? (
                <div className="flex items-center gap-2">
                    <FaLocationCrosshairs />
                    <p className="text-sm"> {userProfile?.location}</p>
                </div>
            ) : null}

            {/* Twitter Username */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<FaXTwitter />
						{userProfile?.twitter_username}
					</a>
				) : null}
				

                {/* Full Name */}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Full name</p>
						<p className=''>{userProfile?.name}</p>
					</div>
				)}

				{/* Email Address */}
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Email address</p>
						<p className=''>{userProfile.email}</p>
					</div>
				)}

				{/* Username */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Username</p>
					<p className=''>{userProfile?.login}</p>
				</div>

				{/* Member sicne :  */}
				{userProfile?.created_at && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Member Since</p>
						<p className=''>{memeberSince}</p>
					</div>
				)}
        </div>
        <div className='flex flex-wrap gap-2 mx-4'>
				{/* Followers Count */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<SlUserFollow className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Followers: {userProfile?.followers}</p>
				</div>

				{/* Following count */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<SlUserFollowing  className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Following: {userProfile?.following}</p>
				</div>

				{/* Number of public repos */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
				</div>
			</div>
    </div>
  )
}

export default ProfileInfo