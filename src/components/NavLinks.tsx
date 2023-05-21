import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import { type DefaultLink } from '../interfaces'
import { scrollToElement } from '../utils/scroll'

interface Props {
  mobile?: boolean
  isDarkTheme?: boolean
  links?: DefaultLink[]
}

const StyledSection = styled.section`
  ${(props: Props) =>
    (props.mobile ?? false) &&
    css`
      background-color: rgba(128, 128, 128, 0.8);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      height: 100%;
      left: 0;
      padding-top: 10px;
      position: fixed;
      transform: translateY(8px);
      width: 150px;
      animation: menuOpen 0.4s;
    `};
  @keyframes menuOpen {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 0.8;
      width: 150px;
    }
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 0 20px;
  color: white;
  ${(props: Props) =>
    (props.mobile ?? false) &&
    css`
      display: flex;
      flex-flow: ${(props: Props) => (props.mobile ?? false ? 'column' : 'row')}
        wrap;
      gap: 15px 0;
    `};
  ${(props: Props) =>
    (props.isDarkTheme === false) &&
    css`
      color: black;
    `};
`

const StyledListItem = styled.li`
  cursor: pointer;
`

export default function NavLinks (props: Props) {
  const { mobile, links } = props
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <StyledSection mobile={mobile}>
      <StyledList mobile={mobile} isDarkTheme={isDarkTheme}>
        {links?.map(({ name, url, type }) => {
          if (type === 'anchor') {
            return (
              <StyledListItem
                key={name}
                onClick={() => {
                  scrollToElement(url)
                }}
              >
                {name}
              </StyledListItem>
            )
          }
          return (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          )
        })}
      </StyledList>
    </StyledSection>
  )
}
