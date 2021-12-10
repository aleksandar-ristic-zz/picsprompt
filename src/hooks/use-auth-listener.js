import { useState, useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import FirebaseContext from '../context/firebase'

export default function useAuthListener() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
	const { firebase } = useContext(FirebaseContext)

	const auth = getAuth()

	useEffect(() => {
		const listener = onAuthStateChanged(auth, authUser => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser))
				setUser(authUser)
			} else {
				localStorage.removeItem('authUseer')
				setUser(null)
			}
		})

		return () => listener()
	}, [firebase])

	return { user }
}
