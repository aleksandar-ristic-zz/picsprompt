import { useState, useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function useAuthListener() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

	const auth = getAuth()

	useEffect(() => {
		onAuthStateChanged(auth, authUser => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser))
				setUser(authUser)
			} else {
				localStorage.removeItem('authUseer')
				setUser(null)
			}
		})
	}, [])

	return { user }
}
