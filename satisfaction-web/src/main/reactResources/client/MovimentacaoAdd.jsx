import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ReactToastr, {ToastContainer, ToastMessage} from 'react-toastr'

let ToastMessageFactory = React.createFactory(ToastMessage.animation);

class MovimentacaoAdd extends Component {

  constructor(props){
    super(props)
    this.state = { options : [], conta : null, quantidade : ""}
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
  }

  handleChange() {
    if(this.refs.conta.value()!=null){
      this.props.onAdded(
        this.refs.conta.value().value,
        this.refs.conta.value().label,
        ReactDOM.findDOMNode(this.refs.quantidade).value
      )
      this.setState({conta : null, quantidade : ""})
      this.refs.conta.focus()
    }else{
      this.refs.container.error("Selecione uma conta!!","", {
          timeOut: 5000,
          extendedTimeOut: 10000
      });
    }
  }

    render () {
      var self = this
      return(
        <FormGroup>
          <Col sm={3}>
            <SimpleSelect
              options = {this.props.options}
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
          <Col sm={1}>
            <Button
              onClick={this.handleChange}>
              <Glyphicon glyph="ok" />
            </Button>
          </Col>

          <ToastContainer ref="container"
                                  toastMessageFactory={ToastMessageFactory}
                                  className="toast-top-right" />
        </FormGroup>
      )
    }
}

export default MovimentacaoAdd
