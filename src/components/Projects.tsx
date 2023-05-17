import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import ProjectCard from './ProjectCard'
// import localProjects from "../mock";
import axios from '../api/onRender'
import useAxios from '../hooks/useAxios'
import useWindowSize from '../hooks/useWindowSize'
import { type Project } from '../interfaces'

interface StyleProps {
  selected?: boolean
  size?: string
}

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  height: 100%;
  max-width: 956px;
  width: 90%;
`

const Canvas = styled.div`
  border: 1px solid #0000001f;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;
  padding: 5px;
  margin-bottom: 45px;
  width: 100%;
`

const InnerCanvas = styled.div`
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px;
  width: ${(props: StyleProps) => props.size ?? '933px'};
`

const FilterContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
  width: 80%;
`

const FilterTitle = styled.h3`
  width: 100%;
`

const FilterOption = styled.span`
  ${(props: StyleProps) =>
    (props.selected ?? false) &&
    css`
      font-weight: 900;
    `}
`

export default function Projects () {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [projects, setProjects] = useState<[] | Project[]>([])
  const [filtered, setFiltered] = useState<[] | Project[]>([])

  const screen = useWindowSize()

  const canvasBreakPoints = (): string => {
    if (screen.width !== undefined) {
      if (screen.width > 1050) return '933px'
      if (screen.width >= 705) return '623px'
    }
    return '310px'
  }

  const canvasSize = canvasBreakPoints()

  const dictionary: Record<string, string> = {
    FrontEnd: 'FE',
    BackEnd: 'BE',
    FullStack: 'FS',
    Todos: ''
  }

  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const span = event.target as HTMLSpanElement
    setActiveFilter(span.id)
  }

  const { response, loading, error, axiosFetch } = useAxios()

  useEffect(() => {
    const getData = async () => {
      await axiosFetch({
        axiosInstance: axios,
        method: 'get',
        url: '/projects'
      })
    }
    getData().catch(console.error)
  }, [])

  useEffect(() => {
    if (response != null) {
      setProjects(response as unknown as Project[])
    }
  }, [response])

  useEffect(() => {
    if (projects.length > 0) {
      setFiltered(
        projects.filter((e) => e.type.includes(dictionary[activeFilter]))
      )
    }
  }, [projects, activeFilter])

  return (
    <Wrapper id="projects">
      <FilterContainer>
        <FilterTitle>Filtrar: </FilterTitle>
        <FilterOption
          id="Todos"
          selected={activeFilter === 'Todos'}
          onClick={handleClick}
        >
          Todos
        </FilterOption>
        <FilterOption
          id="FrontEnd"
          selected={activeFilter === 'FrontEnd'}
          onClick={handleClick}
        >
          FrontEnd
        </FilterOption>
        <FilterOption
          id="BackEnd"
          selected={activeFilter === 'BackEnd'}
          onClick={handleClick}
        >
          BackEnd
        </FilterOption>
        <FilterOption
          id="FullStack"
          selected={activeFilter === 'FullStack'}
          onClick={handleClick}
        >
          FullStack
        </FilterOption>
      </FilterContainer>
      <Canvas>
        <InnerCanvas size={canvasSize}>
          {loading && <p>loading...</p>}
          {!loading && error.length > 0 && <p>{error}</p>}
          {!loading &&
            error.length === 0 &&
            filtered.length > 0 &&
            filtered.map((e) => (
              <ProjectCard
                key={e.id}
                image={e.image}
                name={e.name}
                type={e.type}
                url={e.url}
                repository={e.repository}
              />
            ))}
        </InnerCanvas>
      </Canvas>
    </Wrapper>
  )
}