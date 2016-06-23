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

class MovimentacaoAdd extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

    render () {
      return(
          <FormGroup controlId="plus">
            <Col smOffset={2} sm={4}>
              <Button
                bsSize="small"
                onClick={this.props.addMovimentacao}>
                <Glyphicon glyph="plus" />
              </Button>
            </Col>
          </FormGroup>
      )
    }
}

export default MovimentacaoAdd
