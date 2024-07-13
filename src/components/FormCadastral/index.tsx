// src/components/FormCadastral/index.tsx
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import {
  adicionarContato,
  alterarContato,
  removerContato,
  limparMensagemSucesso,
  setMensagemSucesso
} from '../../store/reducers/contato'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const FormCadastral = () => {
  const contatos = useSelector((state: RootReducer) => state.contato.contatos)
  const mensagemSucesso = useSelector(
    (state: RootReducer) => state.contato.mensagemSucesso
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [estaAlterando, setEstaAlterando] = useState(false)
  const [contatoSelecionado, setContatoSelecionado] = useState<number | null>(
    null
  )
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (!estaAlterando && contatos.length > 0) {
      const contato = contatos[0]
      setContatoSelecionado(contato.id)
      setNome(contato.nome)
      setEmail(contato.email)
      setTelefone(contato.telefone)
    }
  }, [contatos, estaAlterando])

  useEffect(() => {
    if (mensagemSucesso) {
      const timer = setTimeout(() => {
        dispatch(limparMensagemSucesso())
      }, 5000) // Limpar a mensagem após 5 segundos
      return () => clearTimeout(timer)
    }
  }, [mensagemSucesso, dispatch])

  const selecionarContato = (contatoId: number) => {
    const contato = contatos.find((contato) => contato.id === contatoId)
    if (contato) {
      setContatoSelecionado(contato.id)
      setNome(contato.nome)
      setEmail(contato.email)
      setTelefone(contato.telefone)
      setEstaAlterando(true)
    }
  }

  const handleSalvar = () => {
    if (contatoSelecionado !== null) {
      dispatch(
        alterarContato({ id: contatoSelecionado, nome, email, telefone })
      )
      dispatch(setMensagemSucesso(`Cadastro de ${nome} salvo com sucesso!`))
    } else {
      const novoContato = {
        id: Date.now(), // ou qualquer lógica para gerar um ID único
        nome,
        email,
        telefone
      }
      dispatch(adicionarContato(novoContato))
      dispatch(setMensagemSucesso(`Cadastro de ${nome} salvo com sucesso!`))
    }

    // Limpa os campos após salvar
    setNome('')
    setEmail('')
    setTelefone('')
    setContatoSelecionado(null)
    setEstaAlterando(false)
  }

  const handleRemover = (contatoId: number) => {
    dispatch(removerContato(contatoId))
    setEstaAlterando(false)
    setContatoSelecionado(null)
    setNome('')
    setEmail('')
    setTelefone('')
  }

  const handleCancelar = () => {
    setEstaAlterando(false)
    setContatoSelecionado(null)
    setNome('')
    setEmail('')
    setTelefone('')
  }

  const handleVoltarCompras = () => {
    navigate('/')
  }

  return (
    <>
      {mensagemSucesso && (
        <S.MensagemSucesso>{mensagemSucesso}</S.MensagemSucesso>
      )}
      <S.FormCadastro>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
      </S.FormCadastro>
      <S.VoltarContainer>
        <S.Botao onClick={handleVoltarCompras}>Voltar às Compras</S.Botao>
      </S.VoltarContainer>
      <S.BotoesContainer>
        {estaAlterando ? (
          <>
            <S.Botao onClick={handleSalvar}>Confirmar</S.Botao>
            <S.Botao onClick={handleCancelar}>Cancelar</S.Botao>
          </>
        ) : (
          contatos.map((contato) => (
            <S.EstiloBotao key={contato.id} style={{ margin: '10px 0' }}>
              <S.Botao onClick={() => selecionarContato(contato.id)}>
                Alterar
              </S.Botao>
              <S.Botao onClick={() => handleRemover(contato.id)}>
                Remover
              </S.Botao>
            </S.EstiloBotao>
          ))
        )}
      </S.BotoesContainer>
    </>
  )
}

export default FormCadastral
