import { db } from '../lib/firebase'
import {
	collection,
	query,
	where,
	getDocs,
	doc,
	getDoc
} from 'firebase/firestore'

//? Check for username
export async function checkIfUsernameExists(username) {
	const usersRef = collection(db, 'users')
	let queriedUsers = []
	const q = await query(usersRef, where('username', '==', username))

	const querySnapshot = await getDocs(q)

	querySnapshot.forEach(doc => {
		queriedUsers = [...queriedUsers, doc.data()]
	})

	return queriedUsers
}

//? Get user by his Id
export async function getUserByUserId(userId) {
	const docRef = doc(db, 'users', userId)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return docSnap.data()
	} else {
		return null
	}
}
