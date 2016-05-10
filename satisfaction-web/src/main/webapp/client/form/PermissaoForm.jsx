import React, {Component, PropTypes} from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'

class PermissaoForm extends Component {

  constructor(props){
    super(props)
  }

  render = () =>
  <Form horizontal>
    <FormGroup controlId="formHorizontalRotina">
      <Col componentClass={ControlLabel} sm={3}>Rotina</Col>
      <Col sm={9}>
        <FormControl type="rotina" placeholder="Rotina" name="permissao.rotina"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalTipo">
      <Col componentClass={ControlLabel} sm={3}>Tipo</Col>
      <Col sm={9}>
        <FormControl type="password" placeholder="Tipo" name="permissao.tipo"/>
      </Col>
    </FormGroup>
  </Form>

}

export default PermissaoForm
