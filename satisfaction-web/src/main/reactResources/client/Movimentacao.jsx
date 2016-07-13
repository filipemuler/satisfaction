import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import request from 'superagent'
import MovimentacaoAdded from './MovimentacaoAdded'
import MovimentacaoAdd from './MovimentacaoAdd'
import Footer from './Footer'

var index;

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.addDespesa = this.addDespesa.bind(this)
    this.addRecebimento = this.addRecebimento.bind(this)
    this.state = { contas : [],
      grupos : [],
      movimentacoesAdded : [],
      receitasFixas : [],
      despesas : [],
      recebimentos : [],
      cartoesSaida : [],
      cartoesEntrada : [],
      fluxos : [],
      referencias : 0}
      index = 0;
  }

  componentDidMount(){
    var self = this
    request
      .get('movimentacao/list/contas')
      .end(function(err, res){
        self.setState(res.body);
      });
  }

  onHandleSubmit(){
    var self = this
    var submit = {movimentacao : { movimentacoesConta : []}}
    for (var ref in this.refs) {
        var conta;
      submit.movimentacao.movimentacoesConta.push({conta : {id : conta }, quantidade : quantidade})
     }
    request
      .post('movimentacao/salvar')
      .send(submit)
      .end(function(err, res){
        self.setState({despesas : []})
      });
    }

    onCancel(){
      this.setState({despesas : [],
        recebimentos : [],
        referencias : 0})
    }

    addDespesa(id, label, value){
      this.setState({ despesas :
        this.state.despesas.concat(
          {id : id, label : label, value : value}
        )}
      )
      index++;
    }
    addRecebimento(id, label, value){
      this.setState({ recebimentos :
        this.state.recebimentos.concat(
          {id : id, label : label, value : value}
        )}
      )
      index++
    }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} onCancel={this.onCancel}/>
      var receitasFixas = this.state.receitasFixas.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          ref={index++}/>
      )
      var despesas = this.state.despesas.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          ref={index}/>
      )
      var recebimentos = this.state.recebimentos.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          ref={index}/>
      )
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            {receitasFixas}
            <Panel>
              Despesas
              {despesas}
              <MovimentacaoAdd
                options={this.state.contas}
                groups={this.state.grupos}
                onAdded={this.addDespesa}
                ref="adicionaDespesa"/>
            </Panel>
            <Panel>
              Recebimentos
              {recebimentos}
              <MovimentacaoAdd
                options={this.state.contas}
                groups={this.state.grupos}
                onAdded={this.addRecebimento}
                ref="adicionaRecebimento"/>
            </Panel>
          </Form>
        </Panel>
      )
    }
}

export default Movimentacao
