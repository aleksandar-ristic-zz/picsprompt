import { useState, useContext } from 'react'
import propTypes, { arrayOf } from 'prop-types'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import { arrayRemove, arrayUnion } from 'firebase/firestore'

export default function Actions({
	docId,
	totalLikes,
	likedPhoto,
	handleFocus
}) {
	const {
		user: { uid: userId }
	} = useContext(UserContext)
	const [toggleLiked, setToggleLiked] = useState(likedPhoto)
	const [likes, setLikes] = useState(totalLikes)
	const { firebase } = useContext(FirebaseContext)

	const handleToggleLiked = async () => {
		setToggleLiked(toggleLiked => !toggleLiked)

		// await firebase
		// 	.firestore()
		// 	.collection('photos')
		// 	.doc(docId)
		// 	.update({ likes: toggleLiked ? arrayRemove(userId) : arrayUnion(userId) })

		setLikes(likes => (toggleLiked ? likes - 1 : likes + 1))
	}

	return (
		<>
			<div className='flex justify-between p-4'>
				<div className='flex'></div>
			</div>
		</>
	)
}
