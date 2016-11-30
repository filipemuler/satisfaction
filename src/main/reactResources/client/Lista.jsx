import React, {Component, PropTypes} from 'react'
import request from 'superagent'
import Table from 'react-bootstrap/lib/Table'
import Pagination from 'react-bootstrap/lib/Pagination'
import ListaHeader from './ListaHeader'
import ListaItem from './ListaItem'

class Lista extends Component {

  constructor(props){
    super(props)
    this.state = {activePage : 1}
  }

  componentWillMount(){
  }

    render () {
      var headers = new Set();
      var lista = []
      if(this.props.lista !== undefined && this.props.lista != null){
        if(this.props.lista.results !== undefined && this.props.lista.results.length > 0){
          for (let key of Object.keys(this.props.lista.results[0])) {
            headers.add(<ListaHeader key={key} header={key} />)
          }
          headers.add(<ListaHeader style={{width:'50px'}} key="editar" header="Editar" />)
          headers.add(<ListaHeader style={{width:'50px'}} key="remover" header="Remover" />)

          this.props.lista.results.forEach(function(obj){
            const vals = Object.keys(obj).map(key => obj[key]);
            lista.push(<ListaItem key={vals[0]} itens={vals} />)
          })
        }
      }

      return (
        <div>
          <div style={{margin:'auto', width:'85%'}}>
            <Table striped condensed hover>
              <thead><tr>{headers}</tr></thead>
              <tbody>{lista}</tbody>
            </Table>
          </div>
          <div style={{margin: 'auto', width:'15%'}}>
            <Pagination prev next boundaryLinks items={1} maxButtons={5}
              activePage={this.state.activePage} bsSize="small"/>
          </div>
        </div>
      )

    }
}

export default Lista
