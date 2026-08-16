import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
//Custom Imports
import { isAuthenticated } from '../../utils/Token'

const PublicRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default PublicRoute