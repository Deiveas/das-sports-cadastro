import { TituloCadastral } from './styles'
import FormCadastral from '../../components/FormCadastral'
import HeaderCadastral from '../../components/HeaderCadastral'

const AreaCadastral = () => {
  return (
    <div className="container">
      <HeaderCadastral />
      <TituloCadastral>Confirmação Cadastral</TituloCadastral>
      <FormCadastral />
    </div>
  )
}

export default AreaCadastral
