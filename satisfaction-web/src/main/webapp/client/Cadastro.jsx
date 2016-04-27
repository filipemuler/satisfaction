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
      this.setState({results : []})
    }

    componentDidMount(){
    }

    shouldComponentUpdate(nextProps, nextState){
      return nextProps.url == this.props.id
        // console.log('componentWillReceiveProps id: '+this.props.id + ' url: ' + nextProps.url)
      //   var self = this
      //   request
      //     .get('/' + this.props.url)
      //     .end(function(err, res){
      //       console.log(res.body)
      //       self.setState(res.body)
      //     });

    }

    // componentWillReceiveProps(nextProps, nextState){
    //   if(nextProps.url == this.props.id){
    //     console.log('componentWillReceiveProps id: '+this.props.id + ' url: ' + nextProps.url)
    //   //   var self = this
    //   //   request
    //   //     .get('/' + this.props.url)
    //   //     .end(function(err, res){
    //   //       console.log(res.body)
    //   //       self.setState(res.body)
    //   //     });
    //   }
    // }


    render = () =>
    <Panel header={this.props.id} footer={footer}>
      <Lista lista={this.state.results}></Lista>
    </Panel>
}

const buttonCriar = <Button bsStyle="primary">Criar</Button>
const buttonCancelar = <Button>Cancelar</Button>
const footer = <ButtonToolbar>{buttonCriar}{buttonCancelar}</ButtonToolbar>


export default Cadastro
