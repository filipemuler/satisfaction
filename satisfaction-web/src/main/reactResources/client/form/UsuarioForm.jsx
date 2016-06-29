import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'

class UsuarioForm extends Component {

  constructor(props){
    super(props)
  }

  getDataForm(){
    var data = {
      usuario : {
        email : ReactDOM.findDOMNode(this.refs.nome).value,
        senha : ReactDOM.findDOMNode(this.refs.tipoEstabelecimento).value,
        admin : ReactDOM.findDOMNode(this.refs.razaoSocial).value
      }
    }
    return data;
  }

  render = () =>
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={3}>Email</Col>
      <Col sm={9}>
        <FormControl type="email" placeholder="Email" ref="email"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={3}>Senha</Col>
      <Col sm={9}>
        <FormControl type="password" placeholder="Senha" ref="senha"/>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={3}>Administrador?</Col>
      <Col sm={9}>
        <Checkbox ref="admin"/>
      </Col>
    </FormGroup>
  </Form>

}

export default UsuarioForm
