import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../../utils/Token'

const PublicRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default PublicRoute