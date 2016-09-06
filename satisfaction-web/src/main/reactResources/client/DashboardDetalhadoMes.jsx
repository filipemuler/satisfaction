import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Table from 'react-bootstrap/lib/Table'
import DoughnutChart from 'react-chartjs/lib/doughnut'
import request from 'superagent'
import Loading from './Loading'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DashboardDetalhadoMes extends Component {

  constructor(props){
    super(props)
    this.columnClassNameFormat = this.columnClassNameFormat.bind(this)
    this.trClassFormat = this.trClassFormat.bind(this)
  }

  componentDidMount(){
  }

  columnClassNameFormat(fieldValue,row,rowIdx,colIdx){
    //fieldValue is column value
    //row is whole row object
    //rowIdx is index of row
    //colIdx is index of column
    return rowIdx % 2 == 0?'td-column-function-even-example':'td-column-function-odd-example';
  }

  trClassFormat(rowData,rIndex){
    console.log(rowData)
    return rIndex%3==0?'tr-function-example':'';
  }

  render(){
  return(
    <BootstrapTable data={this.props.lista} condensed={true} exportCSV={true} options={{exportCSVText:'Exportar para CSV'}} pagination={true}
      trClassName={this.trClassFormat}>
      <TableHeaderColumn isKey={true} dataField="contaId" hidden={true}>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="conta" columnClassName={this.columnClassNameFormat}>Conta</TableHeaderColumn>
      <TableHeaderColumn dataField="contaValor">Preço</TableHeaderColumn>
      <TableHeaderColumn dataField="agrupadorConta" hidden={true}>AgrupadorConta</TableHeaderColumn>
      <TableHeaderColumn dataField="agrupadorContaId" hidden={true}>Agrupador ID</TableHeaderColumn>
    </BootstrapTable>
      )
  }
}

export default DashboardDetalhadoMes
