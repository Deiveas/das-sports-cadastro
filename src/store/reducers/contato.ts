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
  mensagemSucesso: string
}

const initialState: ContatoState = {
  contatos: [],
  mensagemSucesso: ''
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
      state.mensagemSucesso = 'Cadastro salvo com sucesso!'
    },
    alterarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.contatos[index] = action.payload
      }
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter((c) => c.id !== action.payload)
    },
    limparMensagemSucesso: (state) => {
      state.mensagemSucesso = ''
    },
    setMensagemSucesso: (state, action: PayloadAction<string>) => {
      state.mensagemSucesso = action.payload
    }
  }
})

export const {
  adicionarContato,
  alterarContato,
  removerContato,
  setMensagemSucesso,
  limparMensagemSucesso
} = contatoSlice.actions
export default contatoSlice.reducer
