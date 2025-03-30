// src/store/reducers/contato/index.ts

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
  nomeCadastrado: string
}

const initialState: ContatoState = {
  contatos: [],
  mensagemSucesso: '',
  nomeCadastrado: ''
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
      state.nomeCadastrado = action.payload.nome // Atualiza nome ao cadastrar
    },
    alterarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index >= 0) {
        state.contatos[index] = action.payload
      }
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )

      // Atualiza nomeCadastrado para o último contato restante
      state.nomeCadastrado =
        state.contatos.length > 0
          ? state.contatos[state.contatos.length - 1].nome
          : ''
    },
    setMensagemSucesso: (state, action: PayloadAction<string>) => {
      state.mensagemSucesso = action.payload
    },
    limparMensagemSucesso: (state) => {
      state.mensagemSucesso = ''
    },
    setNomeCadastrado: (state, action: PayloadAction<string>) => {
      state.nomeCadastrado = action.payload
    }
  }
})

export const {
  adicionarContato,
  alterarContato,
  removerContato,
  setMensagemSucesso,
  limparMensagemSucesso,
  setNomeCadastrado
} = contatoSlice.actions

export default contatoSlice.reducer
