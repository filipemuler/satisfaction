import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import ChartistGraph from 'react-chartist';
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import request from 'superagent'

class Dashboard extends Component {

  constructor(props){
    super(props)
    // this.handleEvent = this.handleEvent.bind(this)
  }

    componentWillMount(){
      this.setState({results : []})
    }

    componentDidMount(){
    }

    shouldComponentUpdate(nextProps, nextState){
      // console.log(nextProps)
      // console.log(this.props)
      return nextProps.selected == this.props.id
      // return nextProps.id != this.props.json['id']
        // console.log('componentWillReceiveProps id: '+this.props.id + ' url: ' + nextProps.url)
    //   //   var self = this
    //   //   request
    //   //     .get('/' + this.props.url)
    //   //     .end(function(err, res){
    //   //       console.log(res.body)
    //   //       self.setState(res.body)
    //   //     });
    }

    componentWillUpdate(nextProps, nextState){
        console.log('deve haver um')
      // if(nextProps.url == this.props.id){
    //     console.log('componentWillReceiveProps id: '+this.props.id + ' url: ' + nextProps.url)
    //   //   var self = this
    //   //   request
    //   //     .get('/' + this.props.url)
    //   //     .end(function(err, res){
    //   //       console.log(res.body)
    //   //       self.setState(res.body)
    //   //     });
    //   }
    }


    render(){
    var data = {
      labels: ['a', 'b', 'c', 'd', 'e', 'f'],
      series:
        [10, 20, 40, 15, 10, 5]

    };

    var options = {
      donut: true,
      donutWidth: 30,
      total: 100,
      chartPadding: 20,
labelOffset: 15,
labelDirection: 'explode',
      showLabel: true
    };

    var type = 'Pie'
return(
    <Panel header={this.props.id} >
      <Row className="clearfix">
        <Col sm={3}>
          <ChartistGraph data={data} options={options} type={type} />
        </Col>
        <Col sm={3}>
          <ChartistGraph data={data} options={options} type={type} />
        </Col>
      </Row>
    </Panel>);
}
}


export default Dashboard
