import Projects from "../components/Projects";
import Construction from '../components/Construction';
import { Home } from "../pages/Home";


const path = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Projects",
    element: <Projects />,
  },
  {
    path: "Construction",
    element: <Construction />,
  },
  {
    path: "Construction/:id",
    element: <Construction />,
  }
]

export default path;
