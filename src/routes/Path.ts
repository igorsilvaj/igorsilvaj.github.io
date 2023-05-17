import { type RouteObject } from 'react-router-dom'
// import Teste from '../components/Teste';
import PrivateRoute from '../utils/PrivateRoute'
import Admin from './Admin'
import Home from './Home'
import Login from './Login'

// Utilizar somente componentes de layout na prop element,
// path não aceita componentes que utilizam hooks.
const path: RouteObject[] = [
  {
    path: '/',
    element: Home()
  },
  {
    path: 'login',
    element: Login()
  },
  {
    path: 'admin',
    element: PrivateRoute(Admin())
  }
  // {
  //   path: "Teste/:id",
  //   element: Teste(),
  // }
]

export default path
