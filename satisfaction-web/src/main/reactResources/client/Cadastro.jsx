import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import Lista from './Lista'
import Modal from 'react-bootstrap/lib/Modal'
import ContasForm from './form/ContasForm'
import UsuarioForm from './form/UsuarioForm'
import PermissaoForm from './form/PermissaoForm'
import FilialForm from './form/FilialForm'
import FuncionarioForm from './form/FuncionarioForm'

class Cadastro extends Component {

  constructor(props){
    super(props)
    this.state = {showModal : false}
    this.clickCriar = this.clickCriar.bind(this)
    this.close = this.close.bind(this)
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  clickCriar(){
    this.setState({showModal : true})
  }

  close(){
    this.setState({showModal : false})
  }

  render(){
    const buttonCriar = <Button bsStyle="primary" onClick={this.clickCriar}>Criar</Button>
    const footer =  <ButtonToolbar>{buttonCriar}</ButtonToolbar>

      var cadastro;
      switch (this.props.contexto) {
        case 'contas':
          cadastro = <ContasForm />
          break;
        case 'usuario':
          cadastro = <UsuarioForm />
          break;
        case 'permissao':
          cadastro = <PermissaoForm />
          break;
        case 'filial':
          cadastro = <FilialForm />
          break;
        case 'funcionario':
          cadastro = <FuncionarioForm />
          break;
        default:

      }
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Lista lista={this.props.ajax}></Lista>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Criar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cadastro}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Cancelar</Button>
              <Button bsStyle="primary">Salvar</Button>
            </Modal.Footer>
          </Modal>
        </Panel>
      )
  }

}

export default Cadastro
