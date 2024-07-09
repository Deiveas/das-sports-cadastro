import { useState } from 'react'
import * as S from './styles'

const FormCadastral = () => {
  const [estaAlterando, setEstaAlterando] = useState(false)
  return (
    <>
      <S.FormCadastro>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" />
        </div>
      </S.FormCadastro>
      <S.BotoesContainer>
        {estaAlterando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaAlterando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaAlterando(true)}>Alterar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BotoesContainer>
    </>
  )
}

export default FormCadastral
