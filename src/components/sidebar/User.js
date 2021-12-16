import { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

const User = ({ username, fullName }) =>
	!username || !fullName ? (
		<Skeleton count={1} height={61} />
	) : (
		<Link to={`/p/${username}`} className='grid'>
			<p>{username}</p>
		</Link>
	)

export default User

User.propTypes = {
	username: PropTypes.string,
	fullName: PropTypes.string
}
