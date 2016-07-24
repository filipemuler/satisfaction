import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
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
  }

  getFormData(){
    var data = { conta : {
          id : ReactDOM.findDOMNode(this.refs.conta).value
        },
        valor : ReactDOM.findDOMNode(this.refs.valor).value
    }
    return data;
  }

    render () {
      var self = this
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
                ref="valor"
                value={this.props.inputValue}
                disabled={this.props.disabled}/>
            </InputGroup>
          </Col>
        </FormGroup>
      )
    }

}

export default MovimentacaoAdded
