// src/store/reducers/cadastro.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CadastroState {
  nome: string
  email: string
  telefone: string
}

const initialState: CadastroState = {
  nome: '',
  email: '',
  telefone: ''
}

const cadastroSlice = createSlice({
  name: 'cadastro',
  initialState,
  reducers: {
    salvarDadosCadastro: (state, action: PayloadAction<CadastroState>) => {
      state.nome = action.payload.nome
      state.email = action.payload.email
      state.telefone = action.payload.telefone
    },
    limparDadosCadastro: (state) => {
      state.nome = ''
      state.email = ''
      state.telefone = ''
    }
  }
})

export const { salvarDadosCadastro, limparDadosCadastro } =
  cadastroSlice.actions
export default cadastroSlice.reducer
