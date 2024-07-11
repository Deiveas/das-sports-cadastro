import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const BotaoFixoCadastrar = styled(Link)`
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 400px;
  right: 5px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  color: ${cores.corTexto};
  border: none;

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
