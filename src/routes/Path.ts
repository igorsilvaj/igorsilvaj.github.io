import { RouteObject } from "react-router-dom";
// import Teste from '../components/Teste';
import Home from './Home';

// Lembrar de utilizar somente componentes de layout na prop element,
// path não aceita componentes que utilizam hooks.
const path: RouteObject[] = [
  {
    path: "/",
    element: Home(),
  },
  // {
  //   path: "Projects",
  //   element: Projects(),
  // },
  // {
  //   path: "Teste",
  //   element: Teste(),
  // },
  // {
  //   path: "Teste/:id",
  //   element: Teste(),
  // }
]

export default path;
