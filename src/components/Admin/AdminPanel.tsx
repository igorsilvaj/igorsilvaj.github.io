import styled from 'styled-components'
import NewProjectForm from './NewProjectForm'

const Wrapper = styled.section`
  background-color: black;
  height: 100vh;
  width: 100%;
`

const Text = styled.p`
  color: white;
`

export default function AdminPanel () {
  return (
    <Wrapper>
      <NewProjectForm />
      <section>
        <Text>Listar de todos os projetos, deve ter botão de apagar e editar</Text>
      </section>
    </Wrapper>
  )
}
