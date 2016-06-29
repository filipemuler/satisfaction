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
      filial : {
        nome : ReactDOM.findDOMNode(this.refs.nome).value,
        tipoEstabelecimento : ReactDOM.findDOMNode(this.refs.tipoEstabelecimento).value,
        razaoSocial : ReactDOM.findDOMNode(this.refs.razaoSocial).value,
        cnpj : ReactDOM.findDOMNode(this.refs.cnpj).value,
        inscricaoEstatual : ReactDOM.findDOMNode(this.refs.inscricaoEstatual).value,
        cep : ReactDOM.findDOMNode(this.refs.cep).value,
        tipoLogradouro : this.refs.tipoLogradouro.value().value,
        logradouro : ReactDOM.findDOMNode(this.refs.logradouro).value,
        numero : ReactDOM.findDOMNode(this.refs.numero).value,
        complemento : ReactDOM.findDOMNode(this.refs.complemento).value,
        bairro : ReactDOM.findDOMNode(this.refs.bairro).value,
        localidade : ReactDOM.findDOMNode(this.refs.localidade).value,
        uf : ReactDOM.findDOMNode(this.refs.uf).value,
        pais : ReactDOM.findDOMNode(this.refs.pais).value
      }
    }
    return data;
  }

  render = () =>
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={3}>Email</Col>
      <Col sm={9}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={3}>Senha</Col>
      <Col sm={9}>
        <FormControl type="password" placeholder="Senha" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={3}>Administrador?</Col>
      <Col sm={9}>
        <Checkbox />
      </Col>
    </FormGroup>
  </Form>

}

export default FuncionarioForm
