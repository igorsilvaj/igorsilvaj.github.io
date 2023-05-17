import { Navigate } from 'react-router-dom'

export default function PrivateRoute (privateRoute: JSX.Element) {
  const auth = { token: true }
  return (
    <>
      {
        auth.token ? privateRoute : <Navigate to={'/'}/>
      }
    </>
  )
}
