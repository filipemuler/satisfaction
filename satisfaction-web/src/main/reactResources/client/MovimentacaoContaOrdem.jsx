import React, {Component, PropTypes} from 'react'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
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
            <ControlLabel>{this.props.title}</ControlLabel>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                name="movimentacaoContaValor"
                ref="valor"/>
            </InputGroup>
          </Col>
        </FormGroup>
      )
    }

}

export default MovimentacaoConta
