import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TabelaGrupoConta extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render(){
      return(
        <BootstrapTable data={this.props.lista} condensed={true} pagination={true} height="344">
          <TableHeaderColumn isKey={true} dataField="id" hidden={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="nome">Nome</TableHeaderColumn>
        </BootstrapTable>
      )
  }

}

export default TabelaGrupoConta
