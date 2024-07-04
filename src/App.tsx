import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { store } from './store'
import { setProdutos } from './store/reducers/produto'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const AppContent = () => {
  const dispatch = useDispatch()
  const { data: produtos, error, isLoading } = useGetProdutosQuery()

  useEffect(() => {
    if (produtos) {
      dispatch(setProdutos(produtos))
    }
  }, [produtos, dispatch])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading products</div>

  return (
    <div className="container">
      <Header />
      <Produtos />
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContent />
    </Provider>
  )
}

export default App
