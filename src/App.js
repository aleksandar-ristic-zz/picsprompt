import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import * as ROUTES from './constants/routes'

const Login = lazy(() => import('./pages/login'))

function App() {
	return (
		<Router>
			<Suspense fallback={<p>Loading...</p>} />
			<Switch>
				<Route exact path={ROUTES.LOGIN} component={Login} />
			</Switch>
		</Router>
	)
}

export default App
