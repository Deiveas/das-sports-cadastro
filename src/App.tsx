// src/App.tsx
import React from 'react'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom'
import { GlobalStyle } from './styles'
import { store } from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import AreaCadastral from './pages/AreaCadastral'
import Footer from './components/Footer'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/AreaCadastral',
    element: <AreaCadastral />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
]

const rotas = createBrowserRouter(routes)

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
      <Footer />
    </Provider>
  )
}

export default App
