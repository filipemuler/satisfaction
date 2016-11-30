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
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import request from 'superagent'

class GrupoContaForm extends Component {

  constructor(props){
    super(props)
    this.getDataForm = this.getDataForm.bind(this)
    this.state = { contas : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('grupoconta/form')
      .end(function(err, res){
        self.setState(res.body)
      });
  }


  getDataForm(){

    let contas = []
    for(let t of this.refs.contas.values()){
      contas.push({id : t.value})
    }
    var data = {
      grupoconta : {
        nome : ReactDOM.findDOMNode(this.refs.nome).value,
        contas : contas
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
    <FormGroup controlId="formHorizontalConta">
      <Col componentClass={ControlLabel} sm={3}>Contas</Col>
      <Col sm={9}>
        <MultiSelect options = {this.state.contas} placeholder = "Selecione..."
          ref="contas"/>
      </Col>
    </FormGroup>
  </Form>

}

export default GrupoContaForm
