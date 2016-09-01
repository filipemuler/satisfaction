import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import SimpleSelect from 'react-selectize/src/SimpleSelect'

class MovimentacaoFixa extends Component {

  constructor(props){
    super(props)
    this.state = {value : ""}
  }

  reset(){
    this.setState({value : ""})
  }

  getFormData(){
    let id = ReactDOM.findDOMNode(this.refs.id).value;
    let nome = ReactDOM.findDOMNode(this.refs.nome).value;
    let valor = ReactDOM.findDOMNode(this.refs.valor).value;
    let data;
    if(this.props.money == 'true'){
      data = { conta : {
            id : id,
            nome : nome
          },
          valor : (valor == '') ? 0 : valor
      }
    }else{
      data = { fluxo : {
            id : id,
            nome : nome
          },
          quantidade : (valor == '') ? 0 : valor
      }
    }
    return data;
  }

    render () {
      var self = this
      var money
      if(this.props.money == 'true'){
        money = <InputGroup.Addon>R$</InputGroup.Addon>
      }
      return(
        <FormGroup>
          <Col sm={2}>
            <ControlLabel>{this.props.title}</ControlLabel>
            <input type="hidden" value={this.props.title} ref="nome"/>
            <input type="hidden" value={this.props.contaId} ref="id"/>
          </Col>
          <Col sm={2}>
            <InputGroup>
              {money}
              <FormControl type="text"
                ref="valor"
                value={this.state.value}
                onChange = {function(e){
                  self.setState({value : e.target.value})
                  self.props.calculaTotal();
                }}/>
            </InputGroup>
          </Col>
        </FormGroup>
      )
    }

}

export default MovimentacaoFixa
