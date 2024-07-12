// src/components/FormCadastro/index.tsx
import React, { useState } from 'react'
import * as S from './styles'
import HeaderCadastral from '../HeaderCadastral'
import { useDispatch } from 'react-redux'
import { adicionarContato } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const FormCadastro: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const novoContato = {
      id: Date.now(), // ou um outro gerador de ID adequado
      nome,
      email,
      telefone
    }
    dispatch(adicionarContato(novoContato))
    navigate('/AreaCadastral') // Redireciona para a tela de cadastro
  }

  return (
    <>
      <HeaderCadastral />
      <S.TituloCadastro>
        <h1>Preencha seus dados</h1>
      </S.TituloCadastro>
      <S.Formulario onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Digite seu nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <S.BotaoContainer>
          <S.Botao type="submit">Cadastrar</S.Botao>
        </S.BotaoContainer>
      </S.Formulario>
    </>
  )
}

export default FormCadastro
