// src/store/reducers/index.tsx

import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/api'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'
import produtoReducer from './reducers/produto'
import contatoReducer from './reducers/contato'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    produto: produtoReducer,
    contato: contatoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
