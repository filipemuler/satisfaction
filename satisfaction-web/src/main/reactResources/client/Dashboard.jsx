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

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {filiais : [], loading : true}
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

    render(){
    var options = {
      animateRotate :true
    };
    var loading
    if(this.state.loading == true){
      loading = <Loading />
    }
    var type = 'Pie'
    var filiais = this.state.filiais.map(filial =>
      <Col md={3} key={Math.random()}>
          <Thumbnail>
            <div style={style.tituloFilial}>
              {filial.nome}
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
    <Panel header={this.props.contexto} >
      {loading}
      <Row className="clearfix">
        {filiais}
      </Row>
    </Panel>);
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

export default Dashboard
