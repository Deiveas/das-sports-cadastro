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
    path: '/cadastro',
    element: <h1>Pagina de cadastro</h1>
  }
]
const rotas = createBrowserRouter(routes)

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
