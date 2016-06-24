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
import MovimentacaoAdd from './MovimentacaoAdd'
import Footer from './Footer'

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.state = { options : [], groups : [], referencias : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('movimentacao/list/contas')
      .end(function(err, res){
        let optionsAjax;
        let grupos;
        if(res.body.contas != null){
            optionsAjax = res.body.contas.map((conta) => {return {groupId: conta.grupo, label: conta.nome, value: conta.id}});
        }
        if(res.body.grupos != null){
            grupos = res.body.grupos.map((grupo) => {return {groupId: grupo, title: grupo}});
        }
        self.setState({options : optionsAjax, groups : grupos,
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
        self.setState({referencias : []})
        self.addMovimentacao();
      });
    }

    addMovimentacao(){
      this.setState({referencias : this.state.referencias.concat(Math.random())})
    }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} />
      var movimentacoes = this.state.referencias.map(ref =>
        <MovimentacaoConta key={ref}
          options={this.state.options}
          groups={this.state.groups}
          ref={ref}/>
      )
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            {movimentacoes}
            <MovimentacaoAdd addMovimentacao={this.addMovimentacao}/>
          </Form>
        </Panel>
      )
    }
}

export default Movimentacao
