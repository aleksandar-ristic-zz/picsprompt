import { db } from '../lib/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

const usersRef = collection(db, 'users')

export async function checkIfUsernameExists(username) {
	let queriedUsers = []
	const q = await query(usersRef, where('username', '==', username))

	const querySnapshot = await getDocs(q)

	querySnapshot.forEach(doc => {
		queriedUsers = [...queriedUsers, doc.data()]
	})

	return queriedUsers
}
