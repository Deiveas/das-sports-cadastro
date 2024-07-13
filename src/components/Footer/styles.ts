// src/components/Footer/styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Fundo preto com 50% de transparência */
  color: ${cores.corTexto};
  padding: 8px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const Texto = styled.p`
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
`

export const Data = styled.p`
  margin: 0;
  font-size: 12px;
`
