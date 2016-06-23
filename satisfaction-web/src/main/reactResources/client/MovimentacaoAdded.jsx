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


class MovimentacaoAdded extends Component {

  constructor(props){
    super(props)
    this.state = {movimentacoes : []}
  }

  componentDidMount(){
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.addNewKey !== this.props.addNewKey;
  }

    render () {
      if(this.props.addNewKey != ""){
        this.state.movimentacoes.push(<MovimentacaoConta key={this.props.addNewKey}
          options={this.props.options}
          groups={this.props.groups}
          ref={this.props.addNewKey}/>)
      }
      return(
        <div>
          {this.state.movimentacoes}
        </div>
      )
    }
}

export default MovimentacaoAdded
