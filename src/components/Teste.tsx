import { useParams } from 'react-router-dom'

export function Construction () {
  const { id } = useParams()
  return (
    <div className="App">
      <div>
        <h1>Teste route ID: {id}</h1>
        <p>O timer está neste link</p>
      </div>
    </div>
  )
}

export default function Teste () {
  return (
    <div>
      <Construction />
    </div>
  )
}
