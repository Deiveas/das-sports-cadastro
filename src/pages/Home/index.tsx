import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProdutos } from '../../store/reducers/produto'
import { useGetProdutosQuery } from '../../services/api'
import Header from '../../components/Header'
import Produtos from '../../containers/Produtos'

const Home = () => {
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

export default Home
