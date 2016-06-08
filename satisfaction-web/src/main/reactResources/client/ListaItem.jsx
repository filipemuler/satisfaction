import React, {Component, PropTypes} from 'react'
import request from 'superagent'
import Table from 'react-bootstrap/lib/Table'
import Pagination from 'react-bootstrap/lib/Pagination'
import Button from 'react-bootstrap/lib/Button'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

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
      var editar = <td style={botoes.centro}><Button bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
      var remover = <td style={botoes.centro}><Button bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
      var linha = <tr>{lista}{editar}{remover}</tr>
    return (linha)

  }
}
export default ListaItem

class ListaItemColuna extends Component {
   render = () =>
        <td>{this.props.value}</td>

}

const botoes = {
    centro: {
        "text-align" : "center"
    }
}
