import React, {Component, PropTypes} from 'react'
import request from 'superagent'
import Table from 'react-bootstrap/lib/Table'
import Pagination from 'react-bootstrap/lib/Pagination'

class ListaItem extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    // this.setState({activePage : 1  })
  }

    render () {
      var lista = []
        this.props.itens.forEach(function(o){
          lista.push(<td>{o}</td>)
        })
      return (<tr>{lista}</tr>)

    }
}

export default ListaItem
