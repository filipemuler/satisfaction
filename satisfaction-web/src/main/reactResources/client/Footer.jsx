import React, {Component, PropTypes} from 'react'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'

class Footer extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

    render = () =>
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.props.onSubmit}>Salvar</Button>
        <Button>Cancelar</Button>
      </ButtonToolbar>
}

export default Footer
