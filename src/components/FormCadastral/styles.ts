import styled, { keyframes } from 'styled-components'
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

export const VoltarContainer = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 400px;
  right: 5px;
  display: flex;
  margin-right: 8px;
`
export const BotaoVoltar = styled.button`
  background-color: ${cores.corPrincipal};
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 50%; /* Deixa o botão redondo */
  padding: 10px 20px; /* Ajuste o tamanho conforme necessário */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${cores.corFundo}; /* Muda a cor ao passar o mouse */
  }
`

export const Botao = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 16px;
  margin: 16px;
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

export const EstiloBotao = styled.div`
  display: flex;
  width: 100%;
`

const piscar = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`

export const MensagemSucesso = styled.div`
  color: red; /* Cor da mensagem */
  font-size: 32px; /* Tamanho da fonte */
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  justify-content: space-between;
  margin: 16px 0; /* Margem em cima e embaixo */
  animation: ${piscar} 1s infinite; /* Aplica a animação */
`

export const BotoesAcao = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
`

export const ListaContatos = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: ${cores.corFundo};
  border-radius: 8px;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${cores.corTexto};
    text-align: center;
    margin-bottom: 15px;
  }
`

export const ItemContato = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem conforme necessário */
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: ${cores.corTexto};
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column; /* Para telas pequenas, empilha os itens */
    align-items: flex-start;
    padding: 15px;
  }
`

export const InfoContato = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 5px;
    color: ${cores.corFundo};
  }

  span {
    color: ${cores.corFundo};
    font-size: 0.9em;
  }
`

export const BotoesContato = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os botões quebrem linha se necessário */
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%; /* Ocupa a largura total */
    justify-content: space-between; /* Ajusta melhor a disposição */
    margin-top: 10px; /* Espaço entre botões e conteúdo */
  }
`
// Add these to your styles.js file
export const ImportExportContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`

export const BotaoImportar = styled.span`
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  &:hover {
    background-color: #45a049;
  }
`

export const ContatosContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
`
// Adicione estes estilos ao seu arquivo styles.js ou styles.ts

export const ExportContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`
