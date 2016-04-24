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
import Select from 'react-select';
import request from 'superagent'

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
      return nextProps.t == this.props.t
    }

    logChange(val) {
      console.log("Selected: " + val);
    }

    render = () =>
    <Panel header={this.props.header} footer={footer}>
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
           <FormControl type="text" />
         </Col>
       </FormGroup>
     </Form>
      <select><option value="asds">asds</option></select>

    <Select options={[
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
]} onChange={this.logChange} />
    </Panel>
}

const buttonCriar = <Button bsStyle="primary">Salvar</Button>
const buttonCancelar = <Button>Cancelar</Button>
const footer = <ButtonToolbar>{buttonCriar}{buttonCancelar}</ButtonToolbar>


export default Movimentacao
