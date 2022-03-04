import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/user'
import ProtectedRoute from './helpers/protected_route'

const loading = <p>Loading...</p>
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const NotFound = lazy(() => import('./pages/not-found'))
const Dashboard = lazy(() => import('./pages/dashboard'))

function App() {
	const { user } = useAuthListener()

	return (
		<UserContext.Provider value={{ user }}>
			<Router>
				<Suspense fallback={loading}>
					<Routes>
						<Route path={ROUTES.LOGIN} element={<Login />} />
						<Route path={ROUTES.SIGNUP} element={<Signup />} />

						<Route
							path={ROUTES.DASHBOARD}
							element={
								<ProtectedRoute user={user}>
									<Dashboard />{' '}
								</ProtectedRoute>
							}
						/>

						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</UserContext.Provider>
	)
}

export default App
