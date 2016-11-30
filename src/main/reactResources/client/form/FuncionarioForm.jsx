import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'

class FuncionarioForm extends Component {

  constructor(props){
    super(props)
  }

  getDataForm(){
    var data = {
      funcionario : {
        nome : ReactDOM.findDOMNode(this.refs.nome).value,
        cpf : ReactDOM.findDOMNode(this.refs.cpf).value,
        dataNascimento : ReactDOM.findDOMNode(this.refs.dataNascimento).value,
        dataAdmissao : ReactDOM.findDOMNode(this.refs.dataAdmissao).value,
        socio : this.socio.checked,
        gestorFilial : this.gestorFilial.checked
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
    <FormGroup controlId="formHorizontalCpf">
      <Col componentClass={ControlLabel} sm={3}>CPF</Col>
      <Col sm={9}>
        <FormControl type="cpf" placeholder="CPF" ref="cpf"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalDataNascimento">
      <Col componentClass={ControlLabel} sm={3}>Data Nascimento</Col>
      <Col sm={9}>
        <FormControl type="date" placeholder="Data Nascimento" ref="dataNascimento"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalDataAdmissao">
      <Col componentClass={ControlLabel} sm={3}>Data Admissão</Col>
      <Col sm={9}>
        <FormControl type="date" placeholder="Data Admissão" ref="dataAdmissao"/>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={3}>Socio</Col>
      <Col sm={9}>
        <Checkbox inputRef={ref => { this.socio = ref; }}/>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={3}>Gestor Filial</Col>
      <Col sm={9}>
        <Checkbox inputRef={ref => { this.gestorFilial = ref; }}/>
      </Col>
    </FormGroup>
  </Form>

}

export default FuncionarioForm
