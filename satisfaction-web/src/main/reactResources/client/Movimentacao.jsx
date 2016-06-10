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
import Footer from './Footer'

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.state = { options : [], movimentacoes : []}
  }

  componentDidMount(){
  }

  addMovimentacao(){
    this.setState({
      movimentacoes: this.state.movimentacoes.concat(
        <MovimentacaoConta key={this.state.movimentacoes.length}/>
      )
    })
  }

  onHandleSubmit(){
    var self = this
    request
      .post('movimentacao/salvar')
      .end(function(err, res){
        self.setState({options : [], movimentacoes : []})
      });
  }

    render () {
      const footer = <Footer onSubmit={this.onHandleSubmit} />
      return(
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
      )
    }
}


export default Movimentacao
