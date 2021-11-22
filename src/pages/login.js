import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../context/firebase'

export default function Login() {
	const navigate = useNavigate()
	const { firebase } = useContext(FirebaseContext)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [error, setError] = useState('')
	const isInvalid = password === '' || email === ''

	const handleLogin = () => {}

	useEffect(() => {
		document.title = 'PropmtPics | Login'
	}, [])

	return (
		<div className='container flex mx-auto max-w-screen items-center h-screen'>
			<div className='flex w-3/5'>
				<img
					className='max-w-full'
					src='/images/iphone-w-profile.jpg'
					alt='iPhone with PropmtPics logo'
				/>
			</div>
			<div className='flex flex-col w-2/5'>
				<h2 className='flex justify-center w-full'>
					<img src='/images/logo.svg' alt='PromptPics' className='' />
				</h2>
				{error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

				<form onSubmit={handleLogin} method='POST'></form>
			</div>
		</div>
	)
}
