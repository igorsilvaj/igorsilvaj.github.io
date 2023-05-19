/* eslint-disable @typescript-eslint/no-misused-promises */
import { AxiosError } from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'

const Wrapper = styled.section`
  align-items: center;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #3d90f0;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #3d90f0;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(50, 65, 200);
    animation: jump 0.2s ease-out forwards;
  }
  @keyframes jump {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-3px);
    }
  }
`

export default function LoginForm () {
  const [user, setUser] = useState({ username: '', password: '' })
  const { signIn, isAuthenticated } = useContext(AuthContext)
  const [error, setError] = useState<AxiosError | undefined>(undefined)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('start request token')
    const err = await signIn(user)
    if (err instanceof AxiosError) setError(err)
    console.log('finish request token')
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/admin')
  }, [isAuthenticated])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const mockData = () => {
    setUser({ username: 'Igor Silva', password: '123456789abcd' })
  }

  return (
    <>
      <Wrapper>
        <button onClick={mockData}>Click</button>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {(error != null) && <p>{error.message}</p>}
          <Button>Entrar</Button>
        </Form>
      </Wrapper>
    </>
  )
}
