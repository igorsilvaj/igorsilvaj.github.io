import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'

interface StyleProps {
  selected?: boolean
  size?: string
  isDarkTheme?: boolean
}

const StyledFooter = styled.footer`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 100px;
  gap: 10px 0;
  padding: 10px 0;
  ${(props: StyleProps) => (props.isDarkTheme === false) && css`
    background-color: white;
    color: black;
  `}
`

export default function Footer () {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <StyledFooter isDarkTheme={isDarkTheme}>
      <p>Em constante desenvolvimento 👨‍💻</p>
      <p>Última versão em Maio/23</p>
    </StyledFooter>
  )
}
