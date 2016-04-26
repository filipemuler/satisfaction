import React, {Component, PropTypes} from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import ChartistGraph from 'react-chartist';
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

    componentWillReceiveProps(nextProps, nextState){
      // if(nextProps.t == this.props.t){
      //   console.log('componentWillReceiveProps: '+this.props.t)
      //   var self = this
      //   request
      //     .get('/' + this.props.url)
      //     .end(function(err, res){
      //       console.log(res.body)
      //       self.setState(res.body)
      //     });
      // }
    }


    render(){
    var data = {
      labels: ['a', 'b', 'c', 'd', 'e', 'f'],
      series:
        [10, 20, 40, 15, 10, 5]

    };

    var options = {
      donut: true,
      donutWidth: 60,
      startAngle: 0,
      total: 100,
      showLabel: true
    };

    var type = 'Pie'
return(
    <Panel header={this.props.header} >
<ChartistGraph data={data} options={options} type={type} />
    </Panel>);
}
}


export default Dashboard
