import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import request from 'superagent'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TabelaConta extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render(){
      return(
        <BootstrapTable data={this.props.lista} condensed={true} pagination={true}>
          <TableHeaderColumn isKey={true} dataField="id" hidden={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="nome">Nome</TableHeaderColumn>
          <TableHeaderColumn dataField="entrada">Entrada</TableHeaderColumn>
          <TableHeaderColumn dataField="saida">Saida</TableHeaderColumn>
          <TableHeaderColumn dataField="agrupador">Agrupador</TableHeaderColumn>
          <TableHeaderColumn dataField="ordem">Ordem</TableHeaderColumn>
        </BootstrapTable>
      )
  }

}

export default TabelaConta
