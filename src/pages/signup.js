import { useContext, useState, useRef, useEffect } from 'react'
import FirebaseContext from '../context/firebase'

export default function Signup() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordRepeat, setPasswordRepeat] = useState('')

	const emailRef = useRef()

	useEffect(() => {
		emailRef.current.focus()
	}, [])

	return <div></div>
}
