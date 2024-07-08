import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderConfirmCadastral = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 40px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${cores.corTexto};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
