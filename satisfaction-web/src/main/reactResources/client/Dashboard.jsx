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
        <Thumbnail>
          {filial.nome}
        <DoughnutChart data={filial.dados} />
        <h3 style={t}>65%</h3>
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

const t = {
  "margin": "0 -50% 0 0",
  "position": "absolute",
"top": "45%",
"left": "48%",
"transform": "translate(-50%, -50%)"
}

export default Dashboard
