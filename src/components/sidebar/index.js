import { useState, useEffect, useContext } from 'react'
import useUser from '../../hooks/use-user-hook'
import User from './User'
import Suggestions from './Suggestions'

export default function Sidebar() {
	const {
		user: { fullName, username, userId }
	} = useUser()

	return (
		<div className='p-4'>
			<User />
			<Suggestions />
		</div>
	)
}
