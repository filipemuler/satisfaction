import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
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
    this.state = { options : [], groups : [], conta : null, quantidade : ""}
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
  }

  handleChange() {
    this.props.onAdded(
      this.refs.conta.value().value,
      this.refs.conta.value().label,
      ReactDOM.findDOMNode(this.refs.quantidade).value
    )
    this.setState({conta : null, quantidade : ""})
  }

    render () {
      var self = this
      return(
        <FormGroup>
          <Col smOffset={2} sm={4}>
            <SimpleSelect
              options = {this.props.options}
              groups={this.props.groups}
              placeholder = "Selecione..."
              value={this.state.conta}
              onValueChange = {function(value) {
                    self.setState({conta: value});
              }}
              ref="conta"/>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.quantidade}
                onChange = {function(e){
                  self.setState({quantidade : e.target.value})
                }}
                ref="quantidade"/>
            </InputGroup>
          </Col>
          <Col sm={2}>
            <Button
              onClick={this.handleChange}>
              <Glyphicon glyph="plus" />
            </Button>
          </Col>
        </FormGroup>
      )
    }
}

export default MovimentacaoAdd
