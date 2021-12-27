import { useContext, useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { checkIfUsernameExists } from '../services/firebase'
import * as ROUTES from '../constants/routes'

export default function Signup() {
	const navigate = useNavigate()
	const { db } = useContext(FirebaseContext)
	const auth = getAuth()

	const [username, setUsername] = useState('')
	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const emailRef = useRef()
	const isInvalid =
		password.length <= 5 || email.length <= 10 || username.length <= 2

	const handleSignup = async e => {
		e.preventDefault()

		const usernameExists = await checkIfUsernameExists(username)

		if (!usernameExists.length) {
			try {
				await createUserWithEmailAndPassword(auth, email, password)

				await updateProfile(auth.currentUser, {
					displayName: username
				})

				const userProfileRef = doc(db, 'users', auth.currentUser.uid)

				await setDoc(userProfileRef, {
					userId: auth.currentUser.uid,
					username: username.toLowerCase(),
					fullName,
					email: email.toLowerCase(),
					following: [auth.currentUser.uid],
					followers: [],
					dateCreated: Date.now()
				})

				navigate(ROUTES.DASHBOARD)
			} catch (error) {
				setEmail('')
				setUsername('')
				setFullName('')
				setPassword('')
				setError(error.message)
			}
		} else {
			setError('That username is already taken, please try another.')
		}
	}

	useEffect(() => {
		document.title = 'PropmtPics | Signup'
		emailRef.current.focus()
	}, [])

	return (
		<div className='container flex mx-auto max-w-screen-lg items-center h-screen'>
			<div className='w-3/5 flex'>
				<img
					className='max-w-full'
					src='/images/iphone-w-profile.jpg'
					alt='iPhone with PropmtPics logo'
				/>
			</div>
			<div className='w-2/5 flex flex-col'>
				<div className='mb-4 p-4 flex flex-col items-center bg-white border border-gray-primary rounded'>
					<h2 className='w-3/4 mb-4 flex justify-center'>
						<img src='/images/logo.svg' alt='PromptPics' />
					</h2>

					{error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

					<form onSubmit={handleSignup}>
						<input
							ref={emailRef}
							aria-label='Enter your email'
							type='email'
							placeholder='Email'
							className='w-full h-2 mr-3 py-5 px-4 mb-2 border border-gray-primary rounded text-sm text-gray-base'
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>

						<input
							aria-label='Enter your username'
							type='text'
							placeholder='Username'
							className='w-full h-2 mr-3 py-5 px-4 mb-2 border border-gray-primary rounded text-sm text-gray-base'
							onChange={({ target }) => setUsername(target.value)}
							value={username}
						/>

						<input
							aria-label='Enter your full name'
							type='text'
							placeholder='Full Name'
							className='w-full h-2 mr-3 py-5 px-4 mb-2 border border-gray-primary rounded text-sm text-gray-base'
							onChange={({ target }) => setFullName(target.value)}
							value={fullName}
						/>

						<input
							aria-label='Enter your password'
							type='password'
							placeholder='Password'
							className='w-full h-2 mr-3 py-5 px-4 mb-2 border border-gray-primary rounded text-sm text-gray-base'
							onChange={({ target }) => setPassword(target.value)}
							value={password}
						/>

						<button
							disabled={isInvalid}
							type='submit'
							className={`w-full h-8 bg-blue-medium rounded font-bold text-white ${
								isInvalid && `opacity-50`
							}`}
						>
							Sign Up
						</button>
					</form>
				</div>

				<div className='w-full p-4 flex flex-col justify-center items-center border border-gray-primary rounded'>
					<p className='text-sm'>
						Do you have an account?{' '}
						<Link className='font-bold text-blue-medium' to={ROUTES.LOGIN}>
							Log in here.
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
