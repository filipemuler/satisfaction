import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import Lista from './Lista'
import Modal from 'react-bootstrap/lib/Modal'
import ContasForm from './form/ContasForm'
import FluxoForm from './form/FluxoForm'
import UsuarioForm from './form/UsuarioForm'
import PermissaoForm from './form/PermissaoForm'
import FilialForm from './form/FilialForm'
import FuncionarioForm from './form/FuncionarioForm'
import TabelaConta from './cadastro/tabela/TabelaConta'
import TabelaUsuario from './cadastro/tabela/TabelaUsuario'
import TabelaPermissao from './cadastro/tabela/TabelaPermissao'
import TabelaFluxo from './cadastro/tabela/TabelaFluxo'
import TabelaFilial from './cadastro/tabela/TabelaFilial'
import TabelaFuncionario from './cadastro/tabela/TabelaFuncionario'


class Cadastro extends Component {

  constructor(props){
    super(props)
    this.state = {showModal : false, lista : []}
    this.clickCriar = this.clickCriar.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.close = this.close.bind(this)
  }

  componentWillMount(){
  }

  componentDidMount(){
    var self = this
    request
      .get(this.props.contexto + "/list")
      .end(function(err, res){
        self.setState(res.body);
      });
  }

  clickCriar(){
    this.setState({showModal : true})
  }

  close(){
    this.setState({showModal : false})
  }

  onHandleSubmit(){
    var self = this;
    console.log(this.refs.form.getDataForm())
    request
      .post(url)
      .send(this.refs.form.getDataForm())
      .end(function(err, res){
        self.close();
      });
  }

  render(){
    const buttonCriar = <Button bsStyle="primary" onClick={this.clickCriar}>Criar</Button>
    const footer =  <ButtonToolbar>{buttonCriar}</ButtonToolbar>

      let cadastro;
      let tabela;
      switch (this.props.contexto) {
        case 'contas':
          url = "conta/salva";
          cadastro = <ContasForm ref="form"/>
          tabela = <TabelaConta lista={this.state.lista}/>
          break;
        case 'fluxo':
          url = "fluxo/salva";
          cadastro = <FluxoForm ref="form"/>
          tabela = <TabelaFluxo lista={this.state.lista}/>
          break;
        case 'usuario':
          url = "usuario/salva";
          cadastro = <UsuarioForm ref="form"/>
          tabela = <TabelaUsuario lista={this.state.lista}/>
          break;
        case 'permissao':
          url = "permissao/salva";
          cadastro = <PermissaoForm ref="form"/>
          tabela = <TabelaPermissao lista={this.state.lista}/>
          break;
        case 'filial':
          url = "filial/salva";
          cadastro = <FilialForm ref="form"/>
          tabela = <TabelaFilial lista={this.state.lista}/>
          break;
        case 'funcionario':
          url = "funcionario/salva";
          cadastro = <FuncionarioForm ref="form"/>
          tabela = <TabelaFuncionario lista={this.state.lista}/>
          break;
        default:

      }
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <div style={style.panel}>
            {tabela}
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Criar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cadastro}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Cancelar</Button>
              <Button bsStyle="primary" onClick={this.onHandleSubmit}>Salvar</Button>
            </Modal.Footer>
          </Modal>
        </Panel>
      )
  }

}

let url = ''

const style = {
  panel : {
    height : '375px'
  }
}

export default Cadastro
