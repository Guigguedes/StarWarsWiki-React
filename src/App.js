import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Filmes from "./pages/Filmes";
import Personagens from "./pages/Personagens";
import Planetas from "./pages/Planetas";
import Especies from "./pages/Especies";
import Naves from "./pages/Naves";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Duvidas from "./pages/Duvidas";
import './assets/css/estilos.css'

function App() {

  const [login, setLogin] = useState(false)
  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Filmes /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/people",
      element: login ? <Personagens /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/planets",
      element: login ? <Planetas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/sobre",
      element: login ? <Sobre /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/species",
      element: login ? <Especies /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/starships",
      element: login ? <Naves /> : <Login verificarLogin={verificarLogin} />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;