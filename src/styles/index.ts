import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#EFFBFB',
  corFundo: '#000000',
  corPrincipal: '#FF0000',
  corSecundaria: '#FFFF00'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
