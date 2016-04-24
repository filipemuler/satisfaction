import React, {Component, PropTypes} from 'react'
import request from 'superagent'
import Table from 'react-bootstrap/lib/Table'
import Pagination from 'react-bootstrap/lib/Pagination'

class Lista extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.setState({activePage : 1})
  }

    render () {
      var headers = [<th>id</th>,<th>usuario</th>]
      var lista = []
        this.props.lista.forEach(function(o){
          lista.push(<tr>
            <td>{o.id}</td>
            <td>{o.usuario}</td>
          </tr>)
        })
      return (<div>
        <Table striped condensed hover>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
            {lista}
        </tbody>
      </Table>
      <Pagination
  prev
  next
  boundaryLinks
  items={1}
  maxButtons={5}
  activePage={this.state.activePage} />
        </div>)

    }
}

export default Lista
