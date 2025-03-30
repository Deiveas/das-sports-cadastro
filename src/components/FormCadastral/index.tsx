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

// Defina uma interface para o tipo de contato
interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
}

const FormCadastral = () => {
  const contatos = useSelector((state: RootReducer) => state.contato.contatos)
  const mensagemSucesso = useSelector(
    (state: RootReducer) => state.contato.mensagemSucesso
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Estados do formulário
  const [estaAlterando, setEstaAlterando] = useState(false)
  const [contatoSelecionado, setContatoSelecionado] = useState<number | null>(
    null
  )
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  // Efeito para carregar contatos do localStorage quando o componente monta
  useEffect(() => {
    const contatosSalvos = localStorage.getItem('contatos')
    if (
      contatosSalvos &&
      JSON.parse(contatosSalvos).length > 0 &&
      contatos.length === 0
    ) {
      try {
        const parsedContatos = JSON.parse(contatosSalvos)
        parsedContatos.forEach((contato: Contato) => {
          dispatch(adicionarContato(contato))
        })
      } catch (error) {
        console.error('Erro ao carregar contatos do localStorage:', error)
      }
    }
  }, [contatos.length, dispatch])

  // Efeito para salvar contatos no localStorage quando mudam
  useEffect(() => {
    if (contatos.length > 0) {
      localStorage.setItem('contatos', JSON.stringify(contatos))
    }
  }, [contatos])

  // Efeito para limpar mensagem de sucesso após 5 segundos
  useEffect(() => {
    if (mensagemSucesso) {
      const timer = setTimeout(() => {
        dispatch(limparMensagemSucesso())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [mensagemSucesso, dispatch])

  // Função para selecionar um contato para edição
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

  // Validação do formulário
  const validarFormulario = (): boolean => {
    if (!nome.trim()) {
      dispatch(setMensagemSucesso('Por favor, informe um nome'))
      return false
    }

    if (!email.trim()) {
      dispatch(setMensagemSucesso('Por favor, informe um email'))
      return false
    }

    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      dispatch(setMensagemSucesso('Por favor, informe um email válido'))
      return false
    }

    return true
  }

  // Função para salvar um contato (novo ou existente)
  const handleSalvar = () => {
    if (!validarFormulario()) return

    try {
      if (estaAlterando && contatoSelecionado !== null) {
        dispatch(
          alterarContato({ id: contatoSelecionado, nome, email, telefone })
        )
        dispatch(
          setMensagemSucesso(`Cadastro de ${nome} alterado com sucesso!`)
        )
      } else {
        const novoContato = {
          id: Date.now(), // Gerar ID único baseado no timestamp atual
          nome,
          email,
          telefone
        }
        dispatch(adicionarContato(novoContato))
        dispatch(setMensagemSucesso(`Cadastro de ${nome} salvo com sucesso!`))
      }

      // Limpa os campos e o estado após salvar
      limparCampos()
    } catch (error) {
      console.error('Erro ao salvar contato:', error)
      dispatch(
        setMensagemSucesso(
          'Erro ao salvar contato. Por favor, tente novamente.'
        )
      )
    }
  }

  // Função para limpar os campos do formulário
  const limparCampos = () => {
    setNome('')
    setEmail('')
    setTelefone('')
    setContatoSelecionado(null)
    setEstaAlterando(false)
  }

  // Handler para o botão cancelar
  const handleCancelar = () => {
    limparCampos()
  }

  // Handler para o botão voltar às compras
  const handleVoltarCompras = () => {
    navigate('/')
  }

  // Handler para remover um contato
  const handleRemover = (contatoId: number) => {
    try {
      dispatch(removerContato(contatoId))
      dispatch(setMensagemSucesso('Contato removido com sucesso!'))

      // Se estiver editando o contato que foi removido, limpar o formulário
      if (contatoSelecionado === contatoId) {
        limparCampos()
      }
    } catch (error) {
      console.error('Erro ao remover contato:', error)
      dispatch(
        setMensagemSucesso(
          'Erro ao remover contato. Por favor, tente novamente.'
        )
      )
    }
  }

  // Função para exportar contatos
  const exportarContatos = () => {
    try {
      // Formata os contatos como texto simples
      const dataStr = contatos
        .map(
          (contato) =>
            `Nome: ${contato.nome}\nE-mail: ${contato.email}\nTelefone: ${contato.telefone}\n---------------------------`
        )
        .join('\n')

      // Cria um Blob para o arquivo de texto
      const blob = new Blob([dataStr], { type: 'text/plain' })
      const dataUri = URL.createObjectURL(blob)

      // Nome do arquivo
      const exportFileDefaultName = 'contatos.txt'

      // Cria o link para download
      const linkElement = document.createElement('a')
      linkElement.href = dataUri
      linkElement.download = exportFileDefaultName
      document.body.appendChild(linkElement) // Adiciona ao DOM para compatibilidade
      linkElement.click()
      document.body.removeChild(linkElement) // Remove após o clique
    } catch (error) {
      console.error('Erro ao exportar contatos:', error)
      dispatch(
        setMensagemSucesso(
          'Erro ao exportar contatos. Por favor, tente novamente.'
        )
      )
    }
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

        <S.BotoesAcao>
          <S.Botao onClick={handleSalvar} disabled={!nome || !email}>
            {estaAlterando ? 'Confirmar Alteração' : 'Adicionar Contato'}
          </S.Botao>
          {estaAlterando && (
            <S.Botao onClick={handleCancelar}>Cancelar</S.Botao>
          )}
        </S.BotoesAcao>
      </S.FormCadastro>

      <S.VoltarContainer>
        <S.BotaoVoltar onClick={handleVoltarCompras}>
          Voltar às Compras
        </S.BotaoVoltar>
      </S.VoltarContainer>

      {/* Botão de exportar contatos */}
      {contatos.length > 0 && (
        <S.ExportContainer>
          <S.Botao onClick={exportarContatos}>Exportar Contatos</S.Botao>
        </S.ExportContainer>
      )}

      {contatos.length > 0 && (
        <S.ListaContatos>
          <h3>Lista de Contatos ({contatos.length})</h3>
          <S.ContatosContainer>
            {contatos.map((contato) => (
              <S.ItemContato key={contato.id}>
                <S.InfoContato>
                  <strong>{contato.nome}</strong>
                  <span>{contato.email}</span>
                  <span>{contato.telefone}</span>
                </S.InfoContato>
                <S.BotoesContato>
                  <S.Botao onClick={() => selecionarContato(contato.id)}>
                    Alterar
                  </S.Botao>
                  <S.Botao onClick={() => handleRemover(contato.id)}>
                    Remover
                  </S.Botao>
                </S.BotoesContato>
              </S.ItemContato>
            ))}
          </S.ContatosContainer>
        </S.ListaContatos>
      )}
    </>
  )
}

export default FormCadastral
