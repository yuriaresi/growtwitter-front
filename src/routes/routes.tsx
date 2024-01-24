import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { PaginaInicial } from "../pages/PaginaInicial";
import { Perfil } from "../pages/Perfil";
import { Explorar } from "../pages/Explorar";

export const routes = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <PaginaInicial /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/explorar", element: <Explorar /> },
]);
