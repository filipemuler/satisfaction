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

class FilialForm extends Component {

  constructor(props){
    super(props)
    this.state = { options : []}
  }


  componentDidMount(){
    var self = this
    request
      .get('/filial/list/tipoLogradouro')
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
    <FormGroup controlId="formHorizontalTipoEstabelecimento">
      <Col componentClass={ControlLabel} sm={3}>Tipo de Estabelecimento</Col>
      <Col sm={9}>
        <FormControl type="tipoEstabelecimento" placeholder="Tipo de Estabelecimento" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalRazaoSocial">
      <Col componentClass={ControlLabel} sm={3}>Razão Social</Col>
      <Col sm={9}>
        <FormControl type="razaoSocial" placeholder="Razão Social" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalCNPJ">
      <Col componentClass={ControlLabel} sm={3}>CNPJ</Col>
      <Col sm={9}>
        <FormControl type="cnpj" placeholder="CNPJ" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalInscricaoEstatual">
      <Col componentClass={ControlLabel} sm={3}>Inscrição Estatual</Col>
      <Col sm={9}>
        <FormControl type="inscricaoEstatual" placeholder="Inscrição Estatual" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalCEP">
      <Col componentClass={ControlLabel} sm={3}>CEP</Col>
      <Col sm={9}>
        <FormControl type="cep" placeholder="CEP" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalTipoLogradouro">
      <Col componentClass={ControlLabel} sm={3}>Tipo Logradouro</Col>
      <Col sm={9}>
        <SimpleSelect options = {this.state.options} placeholder = "Selecione..."></SimpleSelect>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalLogradouro">
      <Col componentClass={ControlLabel} sm={3}>Logradouro</Col>
      <Col sm={9}>
        <FormControl type="logradouro" placeholder="Logradouro" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalNumero">
      <Col componentClass={ControlLabel} sm={3}>Número</Col>
      <Col sm={9}>
        <FormControl type="numero" placeholder="Número" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalComplemento">
      <Col componentClass={ControlLabel} sm={3}>Complemento</Col>
      <Col sm={9}>
        <FormControl type="complemento" placeholder="Complemento" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalBairro">
      <Col componentClass={ControlLabel} sm={3}>Bairro</Col>
      <Col sm={9}>
        <FormControl type="bairro" placeholder="Bairro" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalLocalidade">
      <Col componentClass={ControlLabel} sm={3}>Localidade</Col>
      <Col sm={9}>
        <FormControl type="localidade" placeholder="Localidade" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalUF">
      <Col componentClass={ControlLabel} sm={3}>UF</Col>
      <Col sm={9}>
        <FormControl type="uf" placeholder="UF" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPaís">
      <Col componentClass={ControlLabel} sm={3}>País</Col>
      <Col sm={9}>
        <FormControl type="pais" placeholder="País" />
      </Col>
    </FormGroup>
  </Form>

}

export default FilialForm
