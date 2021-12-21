import { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

const User = ({ username, fullName }) =>
	!username || !fullName ? (
		<Skeleton count={1} height={61} />
	) : (
		<Link
			to={`/p/${username}`}
			className='mb-6 grid items-center grid-cols-4 gap-4'
		>
			<div className='flex items-center justify-between col-span-1'>
				<img
					className='w-16 max-h-16 rounded-full flex'
					src={`/images/avatars/${username}.jpg`}
					alt={`${username} avatar`}
				/>
			</div>
			<div className='col-span-3 ml-3'>
				<p className='font-bold text-sm'>{username}</p>
				<p className='text-sm'>{fullName}</p>
			</div>
		</Link>
	)

export default memo(User)

User.propTypes = {
	username: PropTypes.string,
	fullName: PropTypes.string
}

User.whyDidYouRender = true
