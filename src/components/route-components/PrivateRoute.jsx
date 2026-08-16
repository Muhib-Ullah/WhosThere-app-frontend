import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
//Custom Imports
import { isAuthenticated } from '../../utils/Token'

const PrivateRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

export default PrivateRoute