import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
	updateLoggedInUserFollowing,
	updateFollowedUserFollowers
} from '../../services/firebase'

export default function SuggestedProfile({
	userDocId,
	username,
	profileId,
	userId,
	loggedInUserDocId
}) {
	const [followed, setFollowed] = useState(false)

	async function handleFollowUser() {
		setFollowed(true)

		// TODO firebase: 2 functions
		// todo update array of logged in user
		await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)
		// todo update the followers array of the user who has been followed
		await updateFollowedUserFollowers(userDocId, userId, false)
	}

	return !followed ? (
		<div className='flex flex-row items-center align-items justify-between'>
			<div className='flex items-center justify-between'>
				<img
					className='w-8 max-h-8 mr-3 flex rounded-full'
					src={`/images/avatars/${username}.jpg`}
					alt={username}
					onError={e => {
						e.target.src = `/images/avatars/default.png`
					}}
				/>
				<Link to={`/p/${username}`}>
					<p className='font-bold text-sm'>{username}</p>
				</Link>
			</div>
			<button
				className='text-xs font-bold text-blue-medium'
				type='button'
				onClick={handleFollowUser}
			>
				Follow
			</button>
		</div>
	) : null
}

SuggestedProfile.propTypes = {
	userDocId: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	profileId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	loggedInUserDocId: PropTypes.string.isRequired
}
