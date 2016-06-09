import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import MovimentacaoConta from './MovimentacaoConta'

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.state = { options : [], movimentacoes : []}
  }

  componentDidMount(){

  }

  addMovimentacao(){
    movimentacoes.push(<MovimentacaoConta />)
    this.setState({movimentacoes})
  }

    render = () =>
    <Panel header={this.props.contexto} footer={footer}>
      <Form horizontal>
        <FormGroup controlId="manha">
          <Col componentClass={ControlLabel} sm={2}>Manhã</Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup controlId="tarde">
          <Col componentClass={ControlLabel} sm={2}>Tarde</Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup controlId="noite">
          <Col componentClass={ControlLabel} sm={2}>Noite</Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </Col>
        </FormGroup>

        {this.state.movimentacoes}

        <FormGroup controlId="plus">
            <Col smOffset={2} sm={4}>
                <Button bsSize="small" onClick={this.addMovimentacao}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Col>
        </FormGroup>


     </Form>
    </Panel>
}

const buttonCriar = <Button bsStyle="primary">Salvar</Button>
const buttonCancelar = <Button>Cancelar</Button>
const footer = <ButtonToolbar>{buttonCriar}{buttonCancelar}</ButtonToolbar>
const movimentacoes = []


export default Movimentacao
