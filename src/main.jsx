import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//componente errorPage
import ErrorPage from './components/errorpage/ErrorPage.jsx'

//routas
import Home from './pages/home/Home.jsx'
import Cadastro from './pages/cadastro/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"cadastrar",
        element:<Cadastro/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
