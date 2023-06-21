import styled from 'styled-components'
import NewProjectForm from './NewProjectForm'
import ProjectsTable from './ProjectsTable'

const Wrapper = styled.section`
  background-color: black;
  width: 100%;
  color: white;
`

export default function AdminPanel () {
  return (
    <Wrapper>
      <NewProjectForm />
      <ProjectsTable />
    </Wrapper>
  )
}
