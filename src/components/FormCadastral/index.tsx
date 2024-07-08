import * as S from './styles'

const FormCadastral = () => {
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
        <S.BotoesContainer></S.BotoesContainer>
        <S.BotoesContainer>
          <S.Botao>Alterar</S.Botao>
          <S.Botao>Remover</S.Botao>
        </S.BotoesContainer>
      </S.FormCadastro>
    </>
  )
}

export default FormCadastral
