import React, {Component, PropTypes} from 'react'
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
