import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import IndicadoresCompras from './Routes/IndicadoresCompras.tsx'
import IndicadoresPoly from './Routes/IndicadoresPoly.tsx'
import ErrorPage from './Routes/ErrorPage.tsx'
import Estoque from './Routes/Estoque.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <IndicadoresPoly />
      },
      {
        path: '/indicadorescompras',
        element: <IndicadoresCompras />,
      },
      {
        path: '/estoque',
        element: <Estoque />,
      }
    ]
  } 
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
