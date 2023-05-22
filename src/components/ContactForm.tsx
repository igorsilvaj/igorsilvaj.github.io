import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import useWindowSize from '../hooks/useWindowSize'

import fileDark from '../assets/img/fileDark.svg'
import fileLight from '../assets/img/fileLight.svg'

interface StyleProps {
  isDarkTheme?: boolean
  mobile?: boolean
}

const Container = styled.section`
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgb(36, 37, 38),
    rgba(36, 37, 38, 0.7)
  );
  display: flex;
  flex-flow: column wrap;
  height: 600px;
  padding: 0 10px;
  ${(props: StyleProps) =>
    props.isDarkTheme === false &&
    css`
      background: linear-gradient(
        to bottom,
        rgb(255, 255, 255),
        rgba(36, 37, 38, 0.7)
      );
    `}
`

const Wrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-flow: row wrap;
  gap: 30px 0;
  justify-content: space-around;
  max-width: 700px;
  height: 100%;
  width: 90%;
  ${(props: StyleProps) =>
    props.isDarkTheme === false &&
    css`
      color: black;
    `}
  ${(props: StyleProps) =>
    props.mobile === true &&
    css`
      flex-direction: column;
    `}
`

const Title = styled.h2`
  font-size: 1em;
  font-weight: 900;
  margin-top: 5px;
  text-align: start;
  max-width: 90%;
`

const StyledForm = styled.form`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 10px 0;
  height: 420px;
  max-width: 90%;
  width: 400px;
`

const StyledInput = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`

const StyledTextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid black;
  height: 100px;
  padding: 10px;
  resize: none;
  width: 100%;
`

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 10px;
`

const Social = styled.ul`
  align-self: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: 20px 0;
  width: 150px;
  height: 420px;
  color: white;

  .anchor {
    color: white;
  }

  ${(props: StyleProps) =>
    props.isDarkTheme === false &&
    css`
      color: black;
      .anchor {
        color: black;
      }
    `}

  ${(props: StyleProps) =>
    props.mobile === true &&
    css`
      height: 100px;
    `}
`

const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 0 10px;
`

export default function ContactForm () {
  const { isDarkTheme } = useContext(ThemeContext)
  const size = useWindowSize()
  const width = (size.width ?? 1300) < 635

  return (
    <Container id="contact" isDarkTheme={isDarkTheme}>
      <Wrapper isDarkTheme={isDarkTheme} mobile={width}>
        <StyledForm
          action="https://formsubmit.co/igorjsilvabiz@gmail.com"
          method="POST"
        >
          <Title>Entre em contato!</Title>
          <p>
            Fique à vontade para entrar em contato por meio de qualquer uma das
            minhas redes sociais ou pelo formulário.
          </p>
          <StyledInput type="text" name="name" placeholder="Nome" required />
          <StyledInput type="text" name="email" placeholder="Email" required />
          <StyledInput
            type="text"
            name="Assunto"
            placeholder="Assunto"
            required
          />
          <StyledTextArea name="Mensagem" placeholder="Mensagem" required />
          <StyledButton type="submit">Enviar</StyledButton>
        </StyledForm>
        <Social isDarkTheme={isDarkTheme} mobile={width}>
          <ListItem>
            <FontAwesomeIcon icon={faLinkedin} />
            <a
              className="anchor"
              target="_blank"
              href="https://www.linkedin.com/in/igorjsilva/"
              rel="noreferrer"
            >
              /igorjsilva
            </a>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faGithub} />
            <a
              className="anchor"
              target="_blank"
              href="https://github.com/igorsilvaj"
              rel="noreferrer"
            >
              /igorsilvaj
            </a>
          </ListItem>
          <ListItem>
            {isDarkTheme
              ? (
              <img src={fileLight} width="15px" alt="Read.cv" />
                )
              : (
              <img src={fileDark} width="15px" alt="Read.cv" />
                )}
            <a
              className="anchor"
              target="_blank"
              href="https://read.cv/igorjsilva"
              rel="noreferrer"
            >
              read.cv/igorjsilva
            </a>
          </ListItem>
        </Social>
      </Wrapper>
    </Container>
  )
}
