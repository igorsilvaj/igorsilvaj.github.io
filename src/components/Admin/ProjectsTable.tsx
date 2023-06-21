import { useContext, useEffect, useRef, useState } from 'react'
import { AiFillCloseCircle, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import styled from 'styled-components'
import axios from '../../api/onRender'
import { AuthContext } from '../../contexts/AuthContext'
import useAxios from '../../hooks/useAxios'
import { type Project } from '../../interfaces'

const TableContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Table = styled.table`
  width: 500px;

  td {
    padding: 5px 10px;
  }

  tbody {
    text-align: center;
    :nth-of-type(odd) {
      background-color: #3d90f0;
    }
    :hover {
      background-color: rgb(50, 65, 200);
    }
  }
  thead > tr > th {
    padding: 10px;
    background-color: rgb(25, 33, 99);
  }
`

export default function ProjectsTable () {
  const { response, loading, error, axiosFetch } = useAxios()
  const { token } = useContext(AuthContext)
  const [projects, setProjects] = useState<Project[] | []>([])
  const [fetchingProjects, setFetchingProjects] = useState(true)
  const firstLoad = useRef(true)

  const getData = async () => {
    await axiosFetch({
      axiosInstance: axios,
      method: 'get',
      url: '/projects'
    })
  }

  useEffect(() => {
    getData().catch(console.error)
  }, [])

  useEffect(() => {
    if (!firstLoad.current && response != null) {
      if (Array.isArray(response)) {
        setProjects(response as unknown as Project[])
      } else {
        getData().catch(console.error)
      }
    }
  }, [response])

  useEffect(() => {
    if (!firstLoad.current && response != null) {
      if (projects.length > 0) {
        setFetchingProjects(false)
      }
    }
    firstLoad.current = false
  }, [projects])

  const handleCheckboxChange = async (project: Project) => {
    setFetchingProjects(true)
    const { id, visible } = project
    const packet = {
      token,
      id,
      visible: !visible
    }
    console.log(packet)
    await axiosFetch({
      axiosInstance: axios,
      method: 'patch',
      url: '/projects',
      payload: {
        id,
        visible: !visible
      },
      requestConfig: {
        headers: {
          Authorization: token
        }
      }
    })
  }

  return (
    <section id="teste">
      {loading && <div>Loading...</div>}
      {!loading && error.length > 0 && <p>{error}</p>}
      {!loading && (
        <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Nome</th>
                  {/* <th>Image</th>
                  <th>Repository</th>
                  <th>Type</th>
                <th>Url</th> */}
                  <th>Is Visible</th>
                  <th></th>
                </tr>
              </thead>
              {!fetchingProjects && projects.map((e) => (
                <tbody key={e.id}>
                  <tr>
                    <td><AiOutlineArrowUp />{e.position}<AiOutlineArrowDown/></td>
                    <td>{e.name}</td>
                    {/* <td>{e.image}</td>
                  <td>{e.repository}</td>
                  <td>{e.type}</td>
                  <td>{e.url}</td> */}
                    <td>
                      <input
                        type="checkbox"
                        checked={e.visible}
                        name={`chk-${e.name}`}
                        onChange={() => {
                          void handleCheckboxChange(e)
                        }}
                      />
                    </td>
                    <td><AiFillCloseCircle color='red'/></td>
                  </tr>
                </tbody>
              ))}
            </Table>
        </TableContainer>
      )}
    </section>
  )
}
