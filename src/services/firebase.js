import { db } from '../lib/firebase'
import {
	collection,
	query,
	where,
	getDocs,
	doc,
	getDoc,
	limit
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

//? Get suggested users by current user Id
export async function getSuggestedProfiles(userId, following) {
	const usersRef = collection(db, 'users')
	let q

	if (following.length > 0) {
		q = query(usersRef, where('userId', 'not-in', [...following, userId]))
	} else {
		q = query(usersRef, where('userId', '!=', userId), limit(10))
	}

	const result = await getDocs(q)
	result.forEach(doc => {
		console.log(doc.data())
	})

	const profiles = result.docs.map(user => ({
		...user.data(),
		docId: user.id
	}))

	return profiles
}
