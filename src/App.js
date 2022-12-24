import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import './assets/css/estilos.css'

function App() {

  const [login, setLogin] = useState(false);

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },

    {
      path: "/menu",
      element:  login ? <Menu /> : <Login />,
    },
  ]);

  return (
     <RouterProvider router={router} />
  );
}

export default App;
