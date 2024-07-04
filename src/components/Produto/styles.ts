import styled from 'styled-components'
import { cores } from '../../styles'

export const Produto = styled.div``

export const Titulo = styled.h3`
  min-height: 64px;
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    max-height: 300px; /* Altura máxima para evitar distorção */
    object-fit: cover; /* Evita que a imagem seja cortada */
    border-radius: 6px; /* Borda arredondada */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: transform 0.3s ease; /* Efeito de transição */
  }

  &:hover img {
    transform: scale(1.05); /* Aumenta um pouco a escala ao passar o mouse */
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: #fff;

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
  }
`

export const Tag = styled.span`
  background-color: ${cores.corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`
export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0;

  li {
    background-color: ${cores.corPrincipal};
    padding: 8px;
    font-size: 10px;
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: bold;
  }
`
export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Efeito de transição */

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
    transform: translateY(-2px); /* Move o botão para cima */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada */
  }
`
