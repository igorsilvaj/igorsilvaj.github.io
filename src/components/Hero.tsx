import { useContext } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { constants } from '../GlobalStyle'
import { ThemeContext } from '../contexts/ThemeContext'
import { scrollToElement } from '../utils/scroll'

interface Props {
  isDarkTheme?: boolean
}

const StyledSection = styled.section`
  align-items: flex-end;
  background: linear-gradient(
    to bottom,
    rgb(36, 37, 38),
    rgba(36, 37, 38, 0.7)
  );
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: calc(100dvh - ${constants.HEADER_HEIGHT});
  margin-top: ${constants.HEADER_HEIGHT};
  ${(props: Props) =>
    props.isDarkTheme === false &&
    css`
      background: linear-gradient(
        to bottom,
        rgb(255, 255, 255),
        rgba(36, 37, 38, 0.7)
      );
    `};
`

const Presentation = styled.div`
  align-items: center;
  display: flex;
  color: white;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px 0;
  width: 100%;
  ${(props: Props) =>
    props.isDarkTheme === false &&
    css`
      color: black;
    `};
`

const StyledHeading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
  z-index: 998;

  @media screen and (width < 675px) {
    font-size: 2.5rem;
  }
`

const StyledHeading2 = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  z-index: 998;

  @media screen and (width < 675px) {
    font-size: 1rem;
  }
`

const StyledHeading3 = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
  line-height: 1.5rem;
  max-width: 910px;
  z-index: 998;

  @media screen and (width < 675px) {
    font-size: 0.9rem;
    max-width: 90%;
  }
`

const StyledDiv = styled.div`
  align-self: flex-end;
  animation: bounce 2s infinite ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 30px;
  margin-bottom: 20px;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`

export default function Hero () {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <StyledSection id="hero" isDarkTheme={isDarkTheme}>
      <Presentation isDarkTheme={isDarkTheme}>
        <StyledHeading>Olá! Sou o Igor.</StyledHeading>
        <StyledHeading2>Desenvolvedor Full Stack Júnior</StyledHeading2>
        <StyledHeading3>
          <p>Aqui estão organizados meus projetos por categorias.</p>
          <p>
            Este site foi desenvolvido do zero como uma aplicação Full Stack.
          </p>
          <p>
            À medida que aprendo novas tecnologias, elas podem ser implementadas
            neste site ou adicionadas à lista de projetos.
          </p>
        </StyledHeading3>
      </Presentation>
      <StyledDiv>
        <FaArrowDown
          size="30px"
          color={isDarkTheme ? 'white' : 'black'}
          onClick={() => {
            scrollToElement('projects')
          }}
        />
      </StyledDiv>
    </StyledSection>
  )
}
