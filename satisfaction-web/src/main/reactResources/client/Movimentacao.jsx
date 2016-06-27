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
import MovimentacaoConta from './MovimentacaoConta'
import MovimentacaoContaOrdem from './MovimentacaoContaOrdem'
import MovimentacaoAdd from './MovimentacaoAdd'
import Footer from './Footer'

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.state = { options : [], groups : [], contasOrdem : [], referencias : []}
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
        self.setState({options : optionsAjax, groups : grupos, contasOrdem : contasOrdem,
          referencias : self.state.referencias.concat(Math.random())})
      });
  }

  onHandleSubmit(){
    var self = this
    var submit = {movimentacao : { movimentacoesConta : []}}
    for (var ref in this.refs) {
      var conta = this.refs[ref].refs.conta.value().value
      var valor = ReactDOM.findDOMNode(this.refs[ref].refs.valor).value
      submit.movimentacao.movimentacoesConta.push({conta : {id : conta }, valor : valor})
     }
    request
      .post('movimentacao/salvar')
      .send(submit)
      .end(function(err, res){
        self.setState({referencias : [Math.random()]})
      });
    }

    onCancel(){
      this.setState({referencias : [Math.random()]})
    }

    addMovimentacao(){
      this.setState({referencias : this.state.referencias.concat(Math.random())})
    }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} onCancel={this.onCancel}/>
      var movimentacoesOrdem = this.state.contasOrdem.map(conta =>
            <MovimentacaoContaOrdem key={conta.contaId}
              contaId={conta.contaId}
              title={conta.title}
              ref={conta.contaId}/>
      )
      
      var movimentacoes = this.state.referencias.map(ref =>
        <MovimentacaoConta key={ref}
          options={this.state.options}
          groups={this.state.groups}
          ref={ref}/>
      )
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            {movimentacoesOrdem}
            {movimentacoes}
            <MovimentacaoAdd addMovimentacao={this.addMovimentacao}/>
          </Form>
        </Panel>
      )
    }
}

export default Movimentacao
