import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import MovimentacaoConta from './MovimentacaoConta'
import MovimentacaoAdd from './MovimentacaoAdd'
import MovimentacaoAdded from './MovimentacaoAdded'
import Footer from './Footer'

var i = 0;
var key = "key" + i;

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.state = { options : [], groups : [], addNewKey : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('movimentacao/list/contas')
      .end(function(err, res){
        let optionsAjax;
        let grupos;
        if(res.body.contas != null){
            optionsAjax = res.body.contas.map((conta) => {return {groupId: conta.grupo, label: conta.nome, value: conta.nome}});
        }
        if(res.body.grupos != null){
            grupos = res.body.grupos.map((grupo) => {return {groupId: grupo, title: grupo}});
        }
        key = "key" + ++i;
        self.setState({options : optionsAjax, groups : grupos,  addNewKey: key})
      });
  }

  onHandleSubmit(){
    var self = this
    request
      .post('movimentacao/salvar')
      .send(this.state)
      .end(function(err, res){
        self.setState({options : [], groups : []})
      });
    }

    addMovimentacao(){
      key = "key" + ++i;
      this.setState({ addNewKey: key })
    }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} />
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            <MovimentacaoAdded options={this.state.options}
              groups={this.state.groups}
              addNewKey={this.state.addNewKey}
              ref="movimentacaoAdded"/>
            <MovimentacaoAdd addMovimentacao={this.addMovimentacao}/>
          </Form>
        </Panel>
      )
    }
}

export default Movimentacao
