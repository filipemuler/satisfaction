import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TabelaUsuario extends Component {

  constructor(props){
    super(props)
    this.getNome = this.getNome.bind(this)
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  getNome(cell, row){
    if(cell != null)
      return cell.nome
    else
      return ""
  }

  render = () =>
    <div>
      <BootstrapTable data={this.props.lista} condensed={true} pagination={true}>
        <TableHeaderColumn isKey={true} dataField="id" hidden={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="funcionario" dataFormat={this.getNome}>Nome</TableHeaderColumn>
        <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
        <TableHeaderColumn dataField="admin">Administrador</TableHeaderColumn>
      </BootstrapTable>
    </div>

}

export default TabelaUsuario
