import React, {Component, PropTypes} from 'react'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class MovimentacaoAdd extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

    render () {
      return(
          <FormGroup controlId="plus">
            <Col smOffset={2} sm={4}>
              <Button
                bsSize="small"
                onClick={this.props.addMovimentacao}>
                <Glyphicon glyph="plus" />
              </Button>
            </Col>
          </FormGroup>
      )
    }
}

export default MovimentacaoAdd
