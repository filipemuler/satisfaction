import React, {Component, PropTypes} from 'react'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

class MovimentacaoAdd extends Component {

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
              name="movimentacaoContaId"
              ref="conta"/>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                name="movimentacaoContaValor"
                ref="quantidade"/>
            </InputGroup>
          </Col>
          <Col sm={2}>
            <Button
              onClick={this.props.addMovimentacao}>
              <Glyphicon glyph="plus" />
            </Button>
          </Col>
        </FormGroup>
      )
    }
}

export default MovimentacaoAdd
