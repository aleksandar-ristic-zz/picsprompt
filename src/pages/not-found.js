import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

function NotFound() {
	useEffect(() => {
		document.title = 'PropmtPics | 404 Not Found'
	}, [])

	return (
		<div className='bg-gray-background'>
			<div className='mx-auto max-w-screen-lg'>
				<h2 className='text-center text-2xl'>
					There is nothing here. Maybe try somewhere else?
				</h2>
				<Link to={ROUTES.DASHBOARD}>Return to home page.</Link>
			</div>
		</div>
	)
}

export default NotFound
