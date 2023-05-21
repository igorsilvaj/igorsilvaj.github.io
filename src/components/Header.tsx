/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useContext, type ReactNode } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import useWindowSize from '../hooks/useWindowSize'

interface Props {
  isDarkTheme?: boolean
  title?: ReactNode
  desktopMenu?: ReactNode
  mobileMenu?: ReactNode
  children?: ReactNode
}

const StyledHeader = styled.header`
  align-items: center;
  background-color: rgb(11, 11, 11);
  color: white;
  display: flex;
  flex-flow: row wrap;
  font-size: 1.5em;
  font-weight: 900;
  height: 45px;
  justify-content: space-between;
  position: fixed;
  padding: 0 10px;
  top: 0;
  text-decoration: none;
  width: 100%;
  z-index: 999;
  ${(props: Props) =>
    props.isDarkTheme === false &&
    css`
      background-color: rgb(172, 171, 171);
      color: black;
    `};
`

const Button = styled.button`
  background-color: transparent;
`

export default function Header (props: Props) {
  const { desktopMenu, mobileMenu } = props
  const size = useWindowSize()
  const isMobile = (size.width ?? 0) < 700
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  return (
    <StyledHeader isDarkTheme={isDarkTheme}>
      {isMobile ? mobileMenu : desktopMenu}
      <Button onClick={() => { setIsDarkTheme(!isDarkTheme) }} >
        {isDarkTheme ? <FaSun color="yellow" /> : <FaMoon color="black" />}
      </Button>
    </StyledHeader>
  )
}
