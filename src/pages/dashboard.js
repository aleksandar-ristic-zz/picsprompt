import { useEffect } from 'react'
import { Header, Timeline, Sidebar } from '../components'

export default function Dashboard() {
	useEffect(() => {
		document.title = 'PromptPics | Just keep scrolling.'
	}, [])
	return (
		<div className='bg-gray-background'>
			<Header />
			<div className='max-w-screen-lg mx-auto grid grid-cols-3 gap-4 justify-between'>
				<Timeline />
				<Sidebar />
			</div>
		</div>
	)
}
