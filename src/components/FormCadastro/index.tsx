import React from 'react'
import * as S from './styles'
import HeaderCadastral from '../HeaderCadastral'

const FormCadastro: React.FC = () => {
  return (
    <>
      <HeaderCadastral />
      <S.TituloCadastro>
        <h1>Preencha seus dados</h1>
      </S.TituloCadastro>
      <S.Formulario>
        <div>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Digite seu nome Completo"
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
          />
        </div>
        <S.BotãoContainer>
          <S.Botao type="submit">Cadastrar</S.Botao>
        </S.BotãoContainer>
      </S.Formulario>
    </>
  )
}

export default FormCadastro
