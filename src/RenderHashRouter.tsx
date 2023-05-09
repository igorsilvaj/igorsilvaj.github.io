import { createHashRouter, RouterProvider } from 'react-router-dom'
import RootRoute from './routes/RootRoute'
import Error from './routes/Error'
import path from './routes/Path'

const router = createHashRouter([
  {
    path: '/',
    element: <RootRoute />,
    errorElement: <Error />,
    children: [...path]
  }
])

export default function RenderHashRouter () {
  return <RouterProvider router={router} />
}
