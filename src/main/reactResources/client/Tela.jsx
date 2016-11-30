import React, {Component, PropTypes} from 'react'
import TopMenu from './TopMenu'
import CentroAdmin from './CentroAdmin'
import CentroUser from './CentroUser'
import request from 'superagent'
import Loading from './Loading'

class Tela extends Component {

  constructor(props){
    super(props)
    this.state = {admin : false, loading : true}
  }

  componentDidMount(){
    let self = this;
    request
      .get('home/usuario')
      .end(function(err, res){
        self.setState(res.body)
        self.setState({loading : false})
      });
  }

    render(){
      let centro = <Loading />
      if(!!!this.state.loading){
        if(!!this.state.admin){
          centro = <CentroAdmin />
        }else{
          centro = <CentroUser />
        }
      }

      return (
        <div>
          <TopMenu />
          {centro}
        </div>
      )
    }

}

export default Tela
