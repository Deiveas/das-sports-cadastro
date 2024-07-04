import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.itens = action.payload
    }
  }
})

export const { setProdutos } = produtoSlice.actions
export default produtoSlice.reducer
