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

class DashboardDetalhadoMes extends Component {

  constructor(props){
    super(props)
    this.state = {filiais : [], loading : true}
  }

  componentDidMount(){
  }


  render(){
  return(
        <Table responsive>
          <tbody>
            <tr>
              <td>asd</td>
              <td>asd2</td>
            </tr>
          </tbody>
        </Table>
      )
  }
}

export default DashboardDetalhadoMes
