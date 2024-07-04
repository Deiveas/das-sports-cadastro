import Produto from '../components/Produto'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  const produtos = useSelector((state: RootReducer) => state.produto.itens)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produtoId={produto.id} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
