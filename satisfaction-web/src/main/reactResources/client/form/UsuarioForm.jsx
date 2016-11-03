import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import MultiSelect from 'react-selectize/src/MultiSelect'
import request from 'superagent'

class UsuarioForm extends Component {

  constructor(props){
    super(props)
    this.getDataForm = this.getDataForm.bind(this)
    this.state = { turnos : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('usuario/form')
      .end(function(err, res){
        self.setState(res.body)
      });
  }


  getDataForm(){
    //let turno = (this.refs.turno.value() == null) ? null : this.refs.turno.value().value;

    var data = {
      usuario : {
        email : ReactDOM.findDOMNode(this.refs.email).value,
        senha : ReactDOM.findDOMNode(this.refs.senha).value,
        admin : this.admin.checked
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
    <FormGroup controlId="formHorizontalTurno">
      <Col componentClass={ControlLabel} sm={3}>Turno</Col>
      <Col sm={9}>
        <MultiSelect options = {this.state.turnos} placeholder = "Selecione..."
          ref="turno"/>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={3}>Administrador?</Col>
      <Col sm={9}>
        <Checkbox inputRef={ref => { this.admin = ref; }}/>
      </Col>
    </FormGroup>
  </Form>

}

export default UsuarioForm
