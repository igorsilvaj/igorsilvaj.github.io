import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  gap: 10px 0;
  max-width: 700px;
  width: 90%;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 900;
  margin-top: 5px;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  gap: 10px 0;
  max-width: 90%;
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

export default function ContactForm () {
  return (
    <Wrapper id="contact">
      <Title>
        Caso tenha alguma pergunta entre em contato atravez das minhas redes ou
        utilizando o formulario abaixo.
      </Title>
      <StyledForm
        action="https://formsubmit.co/igorjsilvabiz@gmail.com"
        method="POST"
      >
        <StyledInput type="text" name="name" placeholder="Nome" required />
        <StyledInput type="text" name="email" placeholder="Email" required />
        <StyledInput type="text" name="Assunto" placeholder="Assunto" required/>
        <StyledTextArea name="Mensagem" placeholder="Mensagem" required />
        <StyledButton type="submit">Enviar</StyledButton>
      </StyledForm>
    </Wrapper>
  )
}
