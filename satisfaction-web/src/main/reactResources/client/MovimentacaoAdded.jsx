import React, {Component, PropTypes} from 'react'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import SimpleSelect from 'react-selectize/src/SimpleSelect'

class MovimentacaoAdded extends Component {

  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this);
    this.state = {inputValue : ""}
  }

    componentWillReceiveProps(nextProps){
        this.setState({inputValue : this.props.inputValue})
    }

  onChange(e){
        this.setState({inputValue : e.target.value})
  }

    render () {

      return(
        <FormGroup>
          <Col smOffset={2} sm={4}>
            <ControlLabel>{this.props.title}</ControlLabel>
            <input type="hidden" value={this.props.contaId} ref="conta"/>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                name="movimentacaoContaValor"
                ref="quantidade"
                value={this.props.inputValue}
                onChange={this.onChange}/>
            </InputGroup>
          </Col>
        </FormGroup>
      )
    }

}

export default MovimentacaoAdded
