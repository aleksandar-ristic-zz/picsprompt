import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'

export default function Login() {
	const history = useHistory()
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
			Hola los todos from login!
		</div>
	)
}
