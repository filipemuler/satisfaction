import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import Lista from './Lista'

class Cadastro extends Component {

  constructor(props){
    super(props)
    // this.handleEvent = this.handleEvent.bind(this)
  }

    componentWillMount(){
      this.setState({usuarios : []})
    }

    componentDidMount(){
    }

    shouldComponentUpdate(nextProps, nextState){
      return nextProps.selected == this.props.id
    }

    componentWillReceiveProps(nextProps, nextState){
      if(nextProps.selected == this.props.id){
        var self = this
        request
          .get('/' + nextProps.selected)
          .end(function(err, res){
            console.log(res.body)
            self.setState(res.body)
          });
      }
    }


    render = () =>
    <Panel header={this.props.id} footer={footer}>
      <Lista lista={this.state.usuarios}></Lista>
    </Panel>
}

const buttonCriar = <Button bsStyle="primary">Criar</Button>
const buttonCancelar = <Button>Cancelar</Button>
const footer = <ButtonToolbar>{buttonCriar}{buttonCancelar}</ButtonToolbar>


export default Cadastro
