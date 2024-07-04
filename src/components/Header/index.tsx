import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const itens2 = useSelector((state: RootReducer) => state.favorito.itens)
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch() // Declaração do dispatch

  const limparCarrinho = () => {
    // Aqui você pode dispatchar a ação para limpar o carrinho, se necessário
    // Exemplo hipotético:
    // dispatch(limparCarrinhoAction());
  }

  return (
    <S.Header>
      <h1>DAS Sports</h1>
      <div>
        <span>{itens2.length} favoritos</span>
        <img src={cesta} alt="Cesta" onClick={limparCarrinho} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
