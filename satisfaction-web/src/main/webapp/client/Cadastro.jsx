import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import Lista from './Lista'
import Criar from './Criar'

class Cadastro extends Component {

  constructor(props){
    super(props)
    this.state = {showModal : false}
    this.clickCriar = this.clickCriar.bind(this)
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  clickCriar(){
    this.setState({showModal : true})
  }

  render(){
    const buttonCriar = <Button bsStyle="primary" onClick={this.clickCriar}>Criar</Button>
    const buttonCancelar = <Button>Cancelar</Button>
    const footer =  <ButtonToolbar>{buttonCriar}{buttonCancelar}</ButtonToolbar>

      return(
        <Panel header={this.props.id} footer={footer}>
          <Lista lista={this.props.ajax}></Lista>
          <Criar showModal={this.state.showModal}/>
        </Panel>
      )
  }

}




export default Cadastro
