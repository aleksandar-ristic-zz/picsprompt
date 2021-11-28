import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'

const loading = <p>Loading...</p>
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))

function App() {
	return (
		<Router>
			<Suspense fallback={loading}>
				<Routes>
					<Route exact path={ROUTES.LOGIN} element={<Login />} />
					<Route exact path={ROUTES.SIGNUP} element={<Signup />} />
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
