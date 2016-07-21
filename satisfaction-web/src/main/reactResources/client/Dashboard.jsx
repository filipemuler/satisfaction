import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import DoughnutChart from 'react-chartjs/lib/doughnut'
import request from 'superagent'

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {filiais : []}
    // this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount(){
    var self = this
    request
      .get('dashboard/consolidadofinal')
      .end(function(err, res){
        self.setState(res.body);
      });
  }

    componentWillMount(){
      this.setState({results : []})
    }

    render(){
    var options = {
      animateRotate :false
    };

    var type = 'Pie'
    var filiais = this.state.filiais.map(filial =>
      <Col md={3}>
        <Thumbnail style={style.thumbnail}>
          {filial.nome}

            <DoughnutChart data={filial.dados} width="150" height="150" style={style.centro}/>
            <h3 style={style.porcentagem}>65%</h3>

        </Thumbnail>
      </Col>
    )
return(
    <Panel header={this.props.contexto} >
      <Row className="clearfix">
        {filiais}
      </Row>
    </Panel>);
}
}

const style = {
  thumbnail : {
    width : 200,
    height :200,
    position : 'relative'
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
