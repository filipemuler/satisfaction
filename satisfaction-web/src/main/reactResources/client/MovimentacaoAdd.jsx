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

var movimentacoes = []

class MovimentacaoAdd extends Component {

  constructor(props){
    super(props)
    this.addMovimentacao = this.addMovimentacao.bind(this)
    this.state = {movimentacoes : []}
  }

  addMovimentacao(){
    this.setState({
      movimentacoes: this.state.movimentacoes.concat(

      )
    })
  }

    render () {
      let referencia = "movimentacao" + this.props.index;
      movimentacoes.push(<MovimentacaoConta key={this.state.movimentacoes.length}
        index={this.state.movimentacoes.length}
        options={this.state.options}
        groups={this.state.groups}
        onValueChange={this.setValue}
        ref={referencia}/>)
      return(
        <Form horizontal>
        {movimentacoes}
          <FormGroup controlId="plus">
              <Col smOffset={2} sm={4}>
                  <Button bsSize="small" onClick={this.addMovimentacao}>
                      <Glyphicon glyph="plus" />
                  </Button>
              </Col>
          </FormGroup>
          </Form>
      )
    }
}

export default MovimentacaoAdd
