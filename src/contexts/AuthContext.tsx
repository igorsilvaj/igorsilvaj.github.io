/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { createContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/onRender'
import useAxiosSimple from '../hooks/useAxiosSimple'

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface IAuthContext {
  token: string
  user: User | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<AxiosError | undefined>
  isValidToken: () => boolean
}

interface SignInData {
  username: string
  password: string
}

interface User {
  username: string
}

interface DecodedToken {
  username: string
  iat: number
  exp: number
}

export const AuthContext = createContext({} as unknown as IAuthContext)

export default function AuthProvider ({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<undefined | string>(undefined)
  const navigate = useNavigate()

  const isAuthenticated = user != null

  // efeito para verificar se o usuario já se autenticou
  useEffect(() => {
    setToken(Cookies.get('token'))

    if (token !== undefined) {
      // refatorar, fazer o backend retornar as informações do user
      const userInfo: DecodedToken = jwtDecode(token)
      setUser({ username: userInfo.username })
    }
  }, [])

  const signIn = async ({ username, password }: SignInData) => {
    const result = await useAxiosSimple({
      method: 'post',
      url: '/login',
      axiosInstance: axios,
      payload: { username, password }
    })

    if (result instanceof AxiosError) {
      return result
    }

    if (result?.data !== undefined) {
      Cookies.set('token', result.data.token, { secure: true })

      setUser({ username })

      navigate('/admin')
    }
  }

  const isValidToken = (): boolean => {
    const token = Cookies.get('token')
    if (token !== undefined) {
      try {
        const decoded: DecodedToken = jwtDecode(token)
        const currentTime = Date.now() / 1000
        return currentTime < decoded.exp
      } catch (error) {
        console.error('Error decoding token:', error)
      }
    }
    return false
  }

  const contextValue = useMemo(() => ({
    token, user, isAuthenticated, signIn, isValidToken
  }), [token])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
