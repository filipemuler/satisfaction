import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import DoughnutChart from 'react-chartjs/lib/doughnut'
import request from 'superagent'
import Loading from './Loading'
import DashboardConsolidado from './DashboardConsolidado'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {filiais : [], loading : true, consolidadoFinal : true, consolidadoDetalhado : false, lista : []}
    this.detalhaConsolidado = this.detalhaConsolidado.bind(this)
  }

  componentDidMount(){
    var self = this
    request
      .get('dashboard/consolidadofinal')
      .end(function(err, res){
        self.setState(res.body);
        self.setState({loading : false})
      });
  }

  detalhaConsolidado(id){
    var self = this
    request
      .get('dashboard/consolidadoDetalhado/'+id)
      .end(function(err, res){
        self.setState(res.body);
      });
    this.setState({consolidadoFinal : false, consolidadoDetalhado : true})
  }

    render(){
    var loading
    let contexto
    if(this.state.loading == true){
      loading = <Loading />
    }
    if(this.state.consolidadoFinal == true){
      contexto = <DashboardConsolidado filiais={this.state.filiais} onConsolidadoDetalhado={this.detalhaConsolidado}/>
    }
    if(this.state.consolidadoDetalhado == true){
      contexto = <div>
        <BootstrapTable data={this.state.lista} condensed={true} hover={true} exportCSV={true} options={{exportCSVText:'Exportar para CSV'}} pagination={true}>
          <TableHeaderColumn isKey={true} dataField="contaId" hidden={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="conta">Conta</TableHeaderColumn>
          <TableHeaderColumn dataField="contaValor">Preço</TableHeaderColumn>
        </BootstrapTable>
      </div>
    }
    return(
        <Panel header={this.props.contexto} >
          {loading}
          {contexto}
        </Panel>);
    }
}


export default Dashboard
