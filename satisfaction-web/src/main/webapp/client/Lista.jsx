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

  componentWillReceiveProps(nextProps, nextState){
    // console.log(nextProps.lista)
  }

  componentWillMount(){
  }

    render () {
      var headers = new Set();
      var lista = []
      if(this.props.lista !== undefined && this.props.lista != null){
        // for (let key of Object.keys(this.props.lista[0])) {
        //   headers.add(<ListaHeader key={key} header={key} />)
        // }
        //
        // this.props.lista.forEach(function(obj){
        //   const vals = Object.keys(obj).map(key => obj[key]);
        //   lista.push(<ListaItem key={vals[0]} itens={vals} />)
        // })
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
