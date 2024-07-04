import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favorito'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  produtoId: number
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produtoId }: Props) => {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootReducer) => state.produto.itens)
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)

  const produto = produtos.find((p) => p.id === produtoId)

  if (!produto) {
    return null // ou algum placeholder de carregamento/erro
  }

  const estaNosFavoritos = favoritos.some((f) => f.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
