import styled from 'styled-components'
import { cores } from '../../styles'

export const FormCadastro = styled.form`
  background-color: ${cores.corFundo};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  div {
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: ${cores.corTexto};
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ${cores.corPrincipal};
    background-color: ${cores.corTexto};
    color: ${cores.corFundo};
  }
`
export const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaça os botões igualmente */
  margin-top: 16px; /* Espaçamento superior para separar dos inputs */
`

export const Botao = styled.button`
  display: inline-block;
  width: 45%;
  padding: 12px;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  color: ${cores.corTexto};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }
`
