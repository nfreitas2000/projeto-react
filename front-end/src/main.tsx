import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/Editar-Produtos/index.tsx'
import Error from './routes/Error/index.tsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  errorElement: <Error/>,
  children: [{
    path: "/",
    element: <Home/>
  },
  {
    path: "/produtos",
    element: <Produtos/>
  }, 
  {
    path: "/produtos/editar/:id",
    element: <EditarProdutos/>
  },
  {
    path: "/produtos/construcao",
    element: <Navigate to={"/"}></Navigate> 
  }
],
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
