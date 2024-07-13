// src/components/Header/index.tsx
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const itens2 = useSelector((state: RootReducer) => state.favorito.itens)
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

  const nomeCadastrado = useSelector(
    (state: RootReducer) => state.contato.nomeCadastrado // Seleciona o nome cadastrado
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch()

  const limparCarrinho = () => {
    // Aqui você pode dispatchar a ação para limpar o carrinho, se necessário
  }

  const obterPrimeiroNome = (nome: string) => {
    return nome.split(' ')[0] // Retorna o primeiro nome
  }

  return (
    <S.Header>
      <h1>DAS Sports</h1>
      {nomeCadastrado && (
        <h2 style={{ textAlign: 'left', margin: 0 }}>{`"Olá ${obterPrimeiroNome(
          nomeCadastrado
        )}"`}</h2> // Exibe a mensagem com o primeiro nome
      )}
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
