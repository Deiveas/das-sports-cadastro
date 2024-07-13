// src/components/Header/styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${cores.corTexto};
    margin-right: 16px; /* Aumenta o espaço à direita do título */
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      margin-right: 12px; /* Aumenta o espaço à direita da imagem */
      margin-left: 16px;
    }

    span {
      color: ${cores.corFundo};
      margin-left: 12px; /* Aumenta o espaço à esquerda entre spans */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px; /* Espaçamento superior quando em coluna */
    }
  }
`
