import { useState, useEffect, useContext } from 'react'
import useUser from '../../hooks/use-user-hook'
import User from './User'
import Suggestions from './Suggestions'

export function Sidebar() {
	const { user } = useUser()

	console.log(user)
	return (
		<div className='p-4'>
			<User username={user.username} fullName={user.fullName} />
			<Suggestions userId={user.userId} />
		</div>
	)
}
