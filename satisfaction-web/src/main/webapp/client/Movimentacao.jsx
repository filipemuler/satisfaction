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

class Movimentacao extends Component {

  constructor(props){
    super(props)
    // this.handleEvent = this.handleEvent.bind(this)
    this.logChange = this.logChange.bind(this)
  }

    componentWillMount(){
      this.setState({results : []})
    }

    shouldComponentUpdate(nextProps, nextState){
      return nextProps.selected == this.props.id
    // console.log('shouldComponentUpdate')

    // console.log(nextState)
    }

    componentWillReceiveProps(nextProps, nextState){
      console.log('movimentacao: '+nextProps.selected)
      console.log('movimentacao: '+this.props.id)
      console.log('bla')
    }

    logChange() {
      options = ["apple", "mango", "grapes", "melon", "strawberry"].map(function(fruit){
                      return {label: fruit, value: fruit}
                  });

    }

    render(){
      var options = ["apple", "mango", "grapes", "melon", "strawberry"].map(function(fruit){
                return {label: fruit, value: fruit}
            });
            return (
    <Panel header={this.props.id} footer={footer}>
      <Form horizontal>
        <FormGroup controlId="valor">
          <Col componentClass={ControlLabel} sm={2}>
            Valor
          </Col>
          <Col sm={10}>
          <InputGroup>
            <InputGroup.Addon>R$</InputGroup.Addon>
            <FormControl type="text" />
          </InputGroup>
        </Col>
        </FormGroup>

       <FormGroup>
         <Col componentClass={ControlLabel} sm={2}>
           Conta
         </Col>
         <Col sm={10}>
           <SimpleSelect options = {options} placeholder = "Select a fruit"></SimpleSelect>
         </Col>
       </FormGroup>
     </Form>



    </Panel>)
  }
}

const buttonCriar = <Button bsStyle="primary">Salvar</Button>
const buttonCancelar = <Button>Cancelar</Button>
const footer = <ButtonToolbar>{buttonCriar}{buttonCancelar}</ButtonToolbar>


export default Movimentacao
