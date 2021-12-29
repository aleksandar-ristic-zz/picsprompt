import { db } from '../lib/firebase'
import {
	collection,
	query,
	where,
	limit,
	doc,
	getDoc,
	getDocs,
	updateDoc,
	arrayUnion,
	arrayRemove
} from 'firebase/firestore'

//* Check for username
export async function checkIfUsernameExists(username) {
	const usersRef = collection(db, 'users')
	let queriedUsers = []
	const q = await query(usersRef, where('username', '==', username))

	const querySnapshot = await getDocs(q)

	querySnapshot.forEach(doc => {
		queriedUsers = [...queriedUsers, doc.data()]
	})

	return queriedUsers.length > 0
}

//* Get user by userId
export async function getUserByUserId(userId) {
	const docRef = doc(db, 'users', userId)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return docSnap.data()
	} else {
		return null
	}
}

//* Get user by his username
export async function getUserByUsername(username) {
	const docRef = doc(db, 'users', username)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return docSnap.data()
	} else {
		return null
	}
}

//* Get suggested users by current user Id
export async function getSuggestedProfiles(userId, following) {
	const usersRef = collection(db, 'users')
	let q

	if (following.length > 0) {
		q = query(usersRef, where('userId', 'not-in', [...following, userId]))
	} else {
		q = query(usersRef, where('userId', '!=', userId), limit(10))
	}

	const result = await getDocs(q)

	const profiles = result.docs.map(user => ({
		...user.data(),
		docId: user.id
	}))

	return profiles
}

//* update currently logged in user clicked users id
export async function updateLoggedInUserFollowing(
	loggedInUserDocId,
	profileId,
	isFollowingProfile //? expected boolean for current user.following and clicked user
) {
	const usersRef = doc(db, 'users', loggedInUserDocId)

	return updateDoc(usersRef, {
		following: isFollowingProfile
			? arrayRemove(profileId)
			: arrayUnion(profileId)
	})
}

//* update clicked users followers, with current users id
export async function updateFollowedUserFollowers(
	profileDocId,
	loggedInUserDocId,
	isFollowingProfile //? expected boolean for current user and clicked user.followers
) {
	const usersRef = doc(db, 'users', profileDocId)

	return updateDoc(usersRef, {
		followers: isFollowingProfile
			? arrayRemove(loggedInUserDocId)
			: arrayUnion(loggedInUserDocId)
	})
}

//* get users photos
export async function getPhotos(userId, following) {
	const photosRef = doc(db, 'photos')

	const q = query(photosRef, where('userId', 'in', following))
	const result = await getDocs(q)

	const userFollowedPhotos = result.docs.map(photo => ({
		...photo.data(),
		docId: photo.id
	}))

	const photosWithUserDetails = await Promise.all(
		userFollowedPhotos.map(async photo => {
			let userLikedPhoto = false

			if (photo.likes.includes(userId)) {
				userLikedPhoto = true
			}

			const user = await getUserByUserId(photo.userId)
			const { username } = user[0]

			return { username, ...photo, userLikedPhoto }
		})
	)

	return photosWithUserDetails
}

//* Get users photos by userId
export async function getUserPhotosByUserId(userId) {
	const photosRef = doc(db, 'photos')

	const q = query(photosRef, where('userId', '==', userId))
	const result = await getDocs(q)

	const photos = result.docs.map(photo => ({
		...photo.data(),
		docId: photo.id
	}))

	return photos
}

//* Check if user is following profile
export async function isUserFollowingProfile(
	loggedInUserUsername, //? logged in user
	profileUserId //? visited profile
) {
	const usersRef = doc(db, 'users')

	const q = query(
		usersRef,
		where('username', '==', loggedInUserUsername),
		where('following', 'array-contains', profileUserId)
	)
	const result = await getDocs(q)
}
