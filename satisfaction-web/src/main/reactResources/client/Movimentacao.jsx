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
import Footer from './Footer'

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.state = { options : [], movimentacoes : [], groups : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('movimentacao/list/contas')
      .end(function(err, res){
        var optionsAjax = res.body.contas.map((conta) => {return {groupId: conta.grupo, label: conta.nome, value: conta.nome}});
        var grupos = res.body.grupos.map((grupo) => {return {groupId: grupo, title: grupo}});
        self.setState({options : optionsAjax, groups : grupos})
      });
  }

  addMovimentacao(){
    this.setState({
      movimentacoes: this.state.movimentacoes.concat(
        <MovimentacaoConta key={this.state.movimentacoes.length} options={this.state.options} groups={this.state.groups}/>
      )
    })
  }

  onHandleSubmit(){
    var self = this
    request
      .post('movimentacao/salvar')
      .end(function(err, res){
        self.setState({options : [], movimentacoes : [], groups : []})
      });
  }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} />
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>

            <MovimentacaoConta options={this.state.options} groups={this.state.groups}/>

            {this.state.movimentacoes}

            <FormGroup controlId="plus">
                <Col smOffset={2} sm={4}>
                    <Button bsSize="small" onClick={this.addMovimentacao}>
                        <Glyphicon glyph="plus" />
                    </Button>
                </Col>
            </FormGroup>
         </Form>
        </Panel>
      )
    }
}


export default Movimentacao
