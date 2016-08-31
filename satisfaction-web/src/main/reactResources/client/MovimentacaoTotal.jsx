import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import request from 'superagent'
import MovimentacaoAdded from './MovimentacaoAdded'
import MovimentacaoFixa from './MovimentacaoFixa'
import MovimentacaoAdd from './MovimentacaoAdd'
import Footer from './Footer'
import SimpleSelect from 'react-selectize/src/SimpleSelect'

class MovimentacaoTotal extends Component {

  constructor(props){
    super(props)
    this.state = {total : 0}
  }


    render () {
      var self = this

      return(
            <FormGroup>
              <Col sm={2}>
                <ControlLabel>{this.props.label}</ControlLabel>
              </Col>
              <Col sm={2}>
                <InputGroup>
                  <FormControl type="text"
                    value={this.props.total}
                    ref="total" readOnly/>
                </InputGroup>
              </Col>
            </FormGroup>
      )
    }
}

export default MovimentacaoTotal
