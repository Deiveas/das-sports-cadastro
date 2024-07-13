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
  nomeCadastrado: string // Nova propriedade para armazenar o nome cadastrado
}

const initialState: ContatoState = {
  contatos: [],
  mensagemSucesso: '',
  nomeCadastrado: '' // Inicializa como string vazia
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.contatos.push(action.payload)
      state.mensagemSucesso = 'Cadastro salvo com sucesso!'
      state.nomeCadastrado = action.payload.nome // Define o nome cadastrado
    },
    alterarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.contatos[index] = action.payload
        state.nomeCadastrado = action.payload.nome // Atualiza o nome cadastrado
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
    },
    setNomeCadastrado: (state, action: PayloadAction<string>) => {
      state.nomeCadastrado = action.payload // Nova ação para definir o nome
    }
  }
})

export const {
  adicionarContato,
  alterarContato,
  removerContato,
  setMensagemSucesso,
  limparMensagemSucesso,
  setNomeCadastrado // Exporta a nova ação
} = contatoSlice.actions

export default contatoSlice.reducer
