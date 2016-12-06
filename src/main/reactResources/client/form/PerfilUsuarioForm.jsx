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

class PerfilUsuarioForm extends Component {

  constructor(props){
    super(props)
    this.getDataForm = this.getDataForm.bind(this)
    this.state = { grupos : [], permissoes : []}
  }

  componentDidMount(){
    var self = this
    request
      .get('perfilusuario/form')
      .end(function(err, res){
        self.setState(res.body)
      });
  }


  getDataForm(){

    let grupoConta = {}
    if(this.refs.grupoConta.value()!=null){
      grupoConta.id = this.refs.grupoConta.value().value
    }

    let permissoes = []
    for(let t of this.refs.permissoes.values()){
      permissoes.push({id : t.value})
    }

    var data = {
      perfilusuario : {
        nome : ReactDOM.findDOMNode(this.refs.nome).value,
        grupoConta : grupoConta,
        permissoes : permissoes,
        horaAcesso : ReactDOM.findDOMNode(this.refs.horaAcesso).value,
        intervaloAcesso : ReactDOM.findDOMNode(this.refs.intervalo).value
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
    <FormGroup controlId="formHorizontalContas">
      <Col componentClass={ControlLabel} sm={3}>Grupo de contas</Col>
      <Col sm={9}>
        <SimpleSelect options = {this.state.grupos} placeholder = "Selecione..."
          ref="grupoConta"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalTurno">
      <Col componentClass={ControlLabel} sm={3}>Permissões</Col>
      <Col sm={9}>
        <MultiSelect options = {this.state.permissoes} placeholder = "Selecione..."
          ref="permissoes"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalHoraAcesso">
      <Col componentClass={ControlLabel} sm={3}>Hora Acesso</Col>
      <Col sm={9}>
        <FormControl type="hora" placeholder="Ex: 14:00" ref="horaAcesso"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalIntervalo">
      <Col componentClass={ControlLabel} sm={3}>Intervalo</Col>
      <Col sm={9}>
        <FormControl type="integer" placeholder="Ex: 30" ref="intervalo"/>
      </Col>
    </FormGroup>
  </Form>

}

export default PerfilUsuarioForm
