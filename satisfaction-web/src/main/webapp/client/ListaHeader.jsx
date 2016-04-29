import React, {Component, PropTypes} from 'react'
import request from 'superagent'
import Table from 'react-bootstrap/lib/Table'
import Pagination from 'react-bootstrap/lib/Pagination'

class ListaHeader extends Component {

  constructor(props){
    super(props)
  }

  render = () => <th>{this.props.header}</th>

}

export default ListaHeader
