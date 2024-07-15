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
    if (contatos.length > 0 && !estaAlterando) {
      const contato = contatos[contatos.length - 1] // Pega o último contato adicionado
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
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [mensagemSucesso, dispatch])

  const selecionarContato = (contatoId: number) => {
    const contato = contatos.find((c) => c.id === contatoId)
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

    // Limpa os campos e o estado após salvar
    setNome('')
    setEmail('')
    setTelefone('')
    setContatoSelecionado(null)
    setEstaAlterando(false)

    // Aqui, force um refresh do estado de contatos (opcional)
    // dispatch(limparContatos());
  }

  const limparCampos = () => {
    setNome('')
    setEmail('')
    setTelefone('')
    setContatoSelecionado(null)
    setEstaAlterando(false)
  }

  const handleCancelar = () => {
    limparCampos()
  }

  const handleVoltarCompras = () => {
    navigate('/')
  }

  const handleRemover = (contatoId: number) => {
    dispatch(removerContato(contatoId))
    // Limpa o formulário após remover um contato
    setNome('')
    setEmail('')
    setTelefone('')
    setContatoSelecionado(null)
    setEstaAlterando(false)
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
        <S.BotaoVoltar onClick={handleVoltarCompras}>
          Voltar às Compras
        </S.BotaoVoltar>
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
