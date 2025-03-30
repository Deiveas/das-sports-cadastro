import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'
import { limparCarrinho } from '../../store/reducers/carrinho' // Ação para limpar o carrinho

const Header = () => {
  const dispatch = useDispatch()

  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favorito.itens
  )
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const valorTotal = itensCarrinho.reduce((acc, item) => acc + item.preco, 0)

  const nomeCadastrado = useSelector(
    (state: RootReducer) => state.contato.nomeCadastrado
  )

  const handleRemoverTodos = () => {
    if (window.confirm('Tem certeza que deseja esvaziar o carrinho?')) {
      dispatch(limparCarrinho()) // Dispara a ação de limpar o carrinho
    }
  }

  return (
    <S.Header>
      <h1>DAS Sports</h1>
      {nomeCadastrado && <h2>{`Olá, ${nomeCadastrado.split(' ')[0]}`}</h2>}
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img
          src={cesta}
          alt="Cesta"
          onClick={handleRemoverTodos} // Adiciona a função de limpar carrinho
          style={{ cursor: 'pointer' }} // Torna a imagem clicável
        />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
