import { useState, useEffect, useContext } from 'react'
import useUser from '../../hooks/use-user-hook'
import User from './User'
import Suggestions from './Suggestions'

export function Sidebar() {
	const {
		user: { docId, fullName, username, userId, following }
	} = useUser()

	return (
		<div className='p-4'>
			<User username={username} fullName={fullName} />
			<Suggestions
				userId={userId}
				following={following}
				loggedInUserDocId={docId}
			/>
		</div>
	)
}
