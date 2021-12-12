import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'
import * as ROUTES from '../constants/routes'

export function Header() {
	const { firebase } = useContext(FirebaseContext)
	const { user } = useContext(UserContext)

	return (
		<header className='h-16 mb-8 bg-white border-b border-gray-primary'>
			<div className='container mx-auto max-w-screen-lg h-full'>
				<div className='flex justify-between h-full'>
					<div className='flex items-center align-items text-center text-gray-700 cursor-pointer'>
						<h1 className='flex justify-center w-full'>
							<Link to={ROUTES.DASHBOARD}>
								<img
									src='/images/logo.svg'
									alt='PromptPics'
									className='mt-2 w-6/12'
								/>
							</Link>
						</h1>
					</div>
					<div className='flex items-center align-items text-center text-gray-700'>
						{user ? (
							<>
								<Link to={ROUTES.DASHBOARD} aria-label='Dashboard'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='w-8 mr-6 text-black-light cursor-pointer'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
										/>
									</svg>
								</Link>

								<button
									type='button'
									title='Sign Out'
									onClick={() => signOut()}
									onKeyDown={e => {
										if (e.key === 'Enter') {
											signOut()
										}
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
										/>
									</svg>
								</button>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
