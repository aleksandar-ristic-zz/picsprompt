import { useState, useContext } from 'react'
import propTypes from 'prop-types'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'

function AddComment({ docId, comments, setComments, commentInput }) {
	const [comment, setComment] = useState('')
	const { firebase } = useContext(FirebaseContext)

	const {
		user: { displayName }
	} = useContext(UserContext)

	const handleSubmitComment = e => {
		e.preventDefault()

		setComments([...comments, { displayName, comment }])
		setComment('')

		//TODO firebase update comment from photo

		return null
	}

	return (
		<div className='border-t border-gray-primary'>
			<form
				className='flex justify-between pl-0 pr-5'
				method='POST'
				onSubmit={e =>
					comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()
				}
			>
				<input
					aria-label='Add a comment'
					autoComplete='off'
					className='text-sm text-gray-base w-full mr-3 py-5 px-4'
					palceholder='Add a comment...'
					type='text'
					value={comment}
					onChange={({ target }) => setComment(target.value)}
					ref={commentInput}
				/>
				<button
					className={`text-sm font-bold text-blue-medium ${
						!comment && 'opacity-25'
					}`}
					type='button'
					disabled={comment.length < 1}
					onClick={handleSubmitComment}
				>
					Post
				</button>
			</form>
		</div>
	)
}

AddComment.propTypes = {
	docId: propTypes.string.isRequired,
	comments: propTypes.array.isRequired,
	setComments: propTypes.func.isRequired,
	commentInput: propTypes.object
}

export default AddComment
