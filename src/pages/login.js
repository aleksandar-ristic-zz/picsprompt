import { useContext, useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import * as ROUTES from '../constants/routes'

export default function Login() {
	const navigate = useNavigate()
	const { firebase } = useContext(FirebaseContext)
	const auth = getAuth(firebase)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const emailRef = useRef()
	const isInvalid = password.length <= 3 || email <= 10

	const handleLogin = async e => {
		e.preventDefault()

		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate.push(ROUTES.DASHBOARD)
		} catch (error) {
			setEmail('')
			setPassword('')
			setError(error.message)
		}
	}

	useEffect(() => {
		document.title = 'PropmtPics | Login'
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

					<form onSubmit={handleLogin}>
						<input
							ria-label='Enter your email'
							type='email'
							placeholder='Email'
							className='w-full h-2 mr-3 py-5 px-4 mb-2 border border-gray-primary rounded text-sm text-gray-base'
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>
						ref={emailRef}
						a
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
							Log In
						</button>
					</form>
				</div>

				<div className='w-full p-4 flex flex-col justify-center items-center border border-gray-primary rounded'>
					<p className='text-sm'>
						Don't have an account?
						<Link className='font-bold text-blue-medium' to={ROUTES.SIGNUP}>
							Create now.
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
