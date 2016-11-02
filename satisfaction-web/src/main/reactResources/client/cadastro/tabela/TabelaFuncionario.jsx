import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TabelaFuncionario extends Component {

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
        </BootstrapTable>
      )
  }

}

export default TabelaFuncionario
