import React, {Component, PropTypes} from 'react'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Modal from 'react-bootstrap/lib/Modal'
import request from 'superagent'

class Criar extends Component {

  constructor(props){
    super(props)
    this.state = {showModal : false}
    this.close = this.close.bind(this)
  }

  componentWillReceiveProps(nextProps, nextState){
    this.setState({showModal : nextProps.showModal})
  }

  close(){
    this.setState({showModal : false})
  }

  render = () =>
    <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Criar</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Cancelar</Button>
              <Button bsStyle="primary">Salvar</Button>
            </Modal.Footer>
          </Modal>
}

export default Criar
