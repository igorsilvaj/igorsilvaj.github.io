import { Outlet } from 'react-router-dom'
import AuthProvider from '../context/AuthContext'

export default function RootRoute () {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
