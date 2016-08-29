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

class DashboardConsolidado extends Component {

  constructor(props){
    super(props)
    this.state = {filiais : [], loading : true}
    this.detalhaConsolidado = this.detalhaConsolidado.bind(this)
  }

  componentDidMount(){
  }

  detalhaConsolidado(id){
    this.props.onConsolidadoDetalhado(id)
  }

    render(){
    var options = {
      animateRotate :true
    };
    var filiais = this.props.filiais.map(filial =>
      <Col md={3} key={Math.random()}>
          <Thumbnail>
            <div style={style.tituloFilial}>
              <Button bsStyle="link"
                onClick={() => this.detalhaConsolidado(filial.id)}>
                {filial.nome}
              </Button>
            </div>
            <div style={style.centroLinha}>
              <DoughnutChart data={filial.dados} options={options} width="150" height="150" style={style.centro}/>
              <h4 style={style.centro}>{filial.porcentagem}%</h4>
            </div>
            <div style={style.data}>
              {filial.data}
            </div>
          </Thumbnail>
      </Col>
    )
    return(
          <Row className="clearfix">
            {filiais}
          </Row>);
    }
}

const style = {
  data : {
    textAlign : 'center'
  },
  tituloFilial : {
    textAlign : 'center'
  },
  centroLinha : {
    width : 200,
    height :200,
    position : 'relative',
    marginLeft : 'auto',
    marginRight : 'auto'
  },
  centro : {
    position: 'absolute',
    margin: '0 -50% 0 0',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

}

export default DashboardConsolidado
