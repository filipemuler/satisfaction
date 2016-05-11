import React, {Component, PropTypes} from 'react'
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
    this.state = { options : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('/contas/list/contas')
      .end(function(err, res){
        var optionsAjax = res.body.map((tipo) => {return {label: tipo, value: tipo}});
        self.setState({options : optionsAjax})
      });
  }

  render = () =>
  <Form horizontal>
    <FormGroup controlId="formHorizontalNome">
      <Col componentClass={ControlLabel} sm={3}>Nome</Col>
      <Col sm={9}>
        <FormControl type="nome" placeholder="Nome" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalDescricao">
      <Col componentClass={ControlLabel} sm={3}>Descrição</Col>
      <Col sm={9}>
        <FormControl type="descricao" placeholder="Descrição" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalContas">
      <Col componentClass={ControlLabel} sm={3}>Referente a</Col>
      <Col sm={9}>
        <SimpleSelect options = {this.state.options} placeholder = "Selecione..."
          style={s.selectize}/>
      </Col>
    </FormGroup>
  </Form>

}

const s = {
    selectize: {
      'width' : '418px'
    }
}

export default ContasForm
