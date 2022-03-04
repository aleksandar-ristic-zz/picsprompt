import { useLocation, Navigate } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function ProtectedRoute({ user, children, ...rest }) {
	const location = useLocation()

	if (!user) {
		return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
	} else {
		return children
	}
}
