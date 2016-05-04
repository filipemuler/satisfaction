import React, {Component, PropTypes} from 'react'
import request from 'superagent'
import Table from 'react-bootstrap/lib/Table'
import Pagination from 'react-bootstrap/lib/Pagination'

class ListaItem extends Component {

  constructor(props){
    super(props)
  }

  render () {
    var lista = []
      this.props.itens.forEach(function(element, index, array){
        var key = element + '_' + index;
        lista.push(<ListaItemColuna key={key} value={element} />)
      })
    return (<tr>{lista}</tr>)

  }
}
export default ListaItem

class ListaItemColuna extends Component {
   render = () =>
      <td>{this.props.value}</td>
}
