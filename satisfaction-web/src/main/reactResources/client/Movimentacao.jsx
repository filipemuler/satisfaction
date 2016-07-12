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

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.state = { options : [], groups : [], contasOrdem : [], referencias : [],
      inputValue : "", movimentacoesAdded : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('movimentacao/list/contas')
      .end(function(err, res){
        let optionsAjax;
        let grupos;
        let contasOrdem;
        if(res.body.contas != null){
            optionsAjax = res.body.contas.map((conta) => {return {groupId: conta.grupo, label: conta.nome, value: conta.id}});
        }
        if(res.body.grupos != null){
            grupos = res.body.grupos.map((grupo) => {return {groupId: grupo, title: grupo}});
        }
        if(res.body.contasOrdem != null){
          //Colocando em ordem
          res.body.contasOrdem.sort((a,b) => a.ordem > b.ordem )
          contasOrdem = res.body.contasOrdem.map((conta) => {return {contaId: conta.id, title: conta.nome}});
        }
        self.setState({options : optionsAjax, groups : grupos,
          movimentacoesAdded : self.state.movimentacoesAdded.concat(contasOrdem)})
      });
  }

  onHandleSubmit(){
    var self = this
    var submit = {movimentacao : { movimentacoesConta : []}}
    for (var ref in this.refs) {
        var conta;
      if(typeof this.refs[ref].refs.conta.value == 'function'){
            conta = this.refs[ref].refs.conta.value().value
         }else{
         conta = this.refs[ref].refs.conta.value
         }

      var quantidade = ReactDOM.findDOMNode(this.refs[ref].refs.quantidade).value
      submit.movimentacao.movimentacoesConta.push({conta : {id : conta }, quantidade : quantidade})
     }
    request
      .post('movimentacao/salvar')
      .send(submit)
      .end(function(err, res){
        self.setState({movimentacoesAdded : [], inputValue : ""})
      });
    }

    onCancel(){
      this.setState({movimentacoesAdded : []})
    }

    addMovimentacao(contaId, label, value){
      this.setState({
      movimentacoesAdded : this.state.movimentacoesAdded.concat({contaId : contaId, title : label, value : value})})
    }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} onCancel={this.onCancel}/>
      var movimentacoesAdded = this.state.movimentacoesAdded.map(conta =>
        <MovimentacaoAdded key={conta.contaId}
          contaId={conta.contaId}
          title={conta.title}
          inputValue={conta.value}
          ref={conta.contaId}/>
      )
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            {movimentacoesAdded}
            <MovimentacaoAdd
              options={this.state.options}
              groups={this.state.groups}
              onAdded={this.addMovimentacao}
              refs="testando"/>
          </Form>
        </Panel>
      )
    }
}

export default Movimentacao
