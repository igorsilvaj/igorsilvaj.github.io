import React, { useState } from 'react'
import styled from 'styled-components'

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

const Select = styled.select`
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

const Label = styled.label`
  color: white;
`

export default function NewProjectForm () {
  const [dados, setDados] = useState({
    name: '',
    image: '',
    url: '',
    repository: '',
    type: 'FE',
    position: 0,
    visible: false
  })

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setDados({ ...dados, [name]: value })
    console.log(name, value)
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setDados({ ...dados, [name]: checked })
    console.log(name, checked)
  }

  const mockInfos = () => {
    setDados({
      name: 'Lessons Learned',
      image:
        'https://raw.githubusercontent.com/igorsilvaj/lessons-learned/main/resources/images/lessons-learned.png',
      url: 'https://igorsilvaj.github.io/lessons-learned/',
      repository: 'https://github.com/igorsilvaj/lessons-learned',
      type: 'FE',
      position: 0,
      visible: true
    })
  }

  const clearForm = () => {
    setDados({
      name: '',
      image: '',
      url: '',
      repository: '',
      type: 'FE',
      position: 0,
      visible: false
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="projectName"
          name="projectName"
          value={dados.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="image"
          name="image"
          value={dados.image}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="url"
          name="url"
          value={dados.url}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="repository"
          name="repository"
          value={dados.repository}
          onChange={handleChange}
        />
        <Select
          placeholder="Stack"
          name="type"
          value={dados.type}
          onChange={handleChange}
        >
          <option value="FE">FE</option>
          <option value="BE">BE</option>
          <option value="FS">FS</option>
        </Select>
        <Input
          type="number"
          placeholder="position"
          name="position"
          value={dados.position}
          onChange={handleChange}
        />
        <Label htmlFor="projectVisible">
          <input
            id="projectVisible"
            type="checkbox"
            name="visible"
            checked={dados.visible}
            onChange={handleCheckboxChange}
          />
          Projeto deve estar visivel?
        </Label>
        <Button>Cadastrar</Button>
        <Button onClick={mockInfos}>Mock Infos</Button>
        <Button onClick={clearForm}>Limpar Form</Button>
      </Form>
    </>
  )
}
