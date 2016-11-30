import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
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

  getDataForm(){
    var data = {
      permissao : {
        rotina : ReactDOM.findDOMNode(this.refs.rotina).value,
        tipo : ReactDOM.findDOMNode(this.refs.tipo).value
      }
    }
    return data;
  }

  render = () =>
  <Form horizontal>
    <FormGroup controlId="formHorizontalRotina">
      <Col componentClass={ControlLabel} sm={3}>Rotina</Col>
      <Col sm={9}>
        <FormControl type="rotina" placeholder="Rotina" ref="rotina"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalTipo">
      <Col componentClass={ControlLabel} sm={3}>Tipo</Col>
      <Col sm={9}>
        <FormControl type="tipo" placeholder="Tipo" ref="tipo"/>
      </Col>
    </FormGroup>
  </Form>

}

export default PermissaoForm
