import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        // Se o produto já estiver na lista de favoritos, removê-lo
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        // Se o produto não estiver na lista de favoritos, adicioná-lo
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
