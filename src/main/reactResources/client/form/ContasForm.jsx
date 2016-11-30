import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import request from 'superagent'

class ContasForm extends Component {

  constructor(props){
    super(props)
    this.getDataForm = this.getDataForm.bind(this)
    this.state = { contas : [], turnos : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('contas/form')
      .end(function(err, res){
        self.setState(res.body)
      });
  }

  getDataForm(){
    let referente = this.refs.referenteA.value();
    let referente_id = (referente == null) ? null : referente.value;

    let turno = (this.refs.turno.value() == null) ? null : this.refs.turno.value().value;

    var data = {
      conta : {
        nome : ReactDOM.findDOMNode(this.refs.nome).value,
        descricao : ReactDOM.findDOMNode(this.refs.descricao).value,
        entrada : this.entrada.checked,
        cartao : this.cartao.checked,
        turno : turno,
        referenteA : {
          id : referente_id
        }
      }
    }
    return data;
  }

  render = () =>
  <Form horizontal>
    <FormGroup controlId="formHorizontalNome">
      <Col componentClass={ControlLabel} sm={3}>Nome</Col>
      <Col sm={9}>
        <FormControl type="nome" placeholder="Nome" ref="nome"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalDescricao">
      <Col componentClass={ControlLabel} sm={3}>Descrição</Col>
      <Col sm={9}>
        <FormControl type="descricao" placeholder="Descrição" ref="descricao"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalContas">
      <Col componentClass={ControlLabel} sm={3}>Referente a</Col>
      <Col sm={9}>
        <SimpleSelect options = {this.state.contas} placeholder = "Selecione..."
          ref="referenteA"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalTurno">
      <Col componentClass={ControlLabel} sm={3}>Turno</Col>
      <Col sm={9}>
        <SimpleSelect options = {this.state.turnos} placeholder = "Selecione..."
          ref="turno"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalEntrada">
      <Col componentClass={ControlLabel} sm={3}>Entrada?</Col>
      <Col sm={9}>
        <Checkbox inputRef={ref => { this.entrada = ref; }}/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalCartao">
      <Col componentClass={ControlLabel} sm={3}>Cartão?</Col>
      <Col sm={9}>
        <Checkbox inputRef={ref => { this.cartao = ref; }}/>
      </Col>
    </FormGroup>
  </Form>

}

export default ContasForm
