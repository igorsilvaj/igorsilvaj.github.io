import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

export default function PrivateRoute ({ children }: Props) {
  const { isValidToken } = useContext(AuthContext)
  return (
    <>
      {
        isValidToken() ? children : <Navigate to={'/'}/>
      }
    </>
  )
}
