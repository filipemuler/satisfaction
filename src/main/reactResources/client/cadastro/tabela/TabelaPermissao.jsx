import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TabelaPermissao extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render = () =>
    <div>
      <BootstrapTable data={this.props.lista} condensed={true} pagination={true}>
        <TableHeaderColumn isKey={true} dataField="id" hidden={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="rotina">Rotina</TableHeaderColumn>
        <TableHeaderColumn dataField="tipo">Tipo</TableHeaderColumn>
      </BootstrapTable>
    </div>

}

export default TabelaPermissao
