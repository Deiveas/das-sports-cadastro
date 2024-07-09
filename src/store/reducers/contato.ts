// src/store/reducers/contato.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type ContatoState = {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: []
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionarContato(state, action: PayloadAction<Contato>) {
      state.contatos.push(action.payload)
    },
    alterarContato(state, action: PayloadAction<Contato>) {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.contatos[index] = action.payload
      }
    },
    removerContato(state, action: PayloadAction<number>) {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { adicionarContato, alterarContato, removerContato } =
  contatoSlice.actions
export default contatoSlice.reducer
