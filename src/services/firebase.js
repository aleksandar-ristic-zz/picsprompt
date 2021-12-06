import { firebase } from '../lib/firebase'
import { collection, query, where } from 'firebase/firestore'

const usersRef = collection(firebase, 'users')

export async function checkIfUsernameExists(username) {
	const q = query(usersRef, where('username', '==', username))

	return q.docs.map(user => user.data().length > 0)
}
