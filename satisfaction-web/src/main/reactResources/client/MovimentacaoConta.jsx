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

class MovimentacaoConta extends Component {

  constructor(props){
    super(props)
    this.state = { options : [], groups : []}
  }

  componentDidMount(){
  }

    render () {
      return(
        <FormGroup>
          <Col smOffset={2} sm={4}>
            <SimpleSelect
              options = {this.props.options}
              groups={this.props.groups}
              placeholder = "Selecione..."
              onValueChange={this.props.onValueChange}
              name="movimentacaoContaId"/>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                onChange={this.props.onValueChange}
                name="movimentacaoContaValor"/>
            </InputGroup>
          </Col>
        </FormGroup>
      )
    }

}

export default MovimentacaoConta
