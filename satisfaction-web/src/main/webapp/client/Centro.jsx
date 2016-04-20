import React, {Component, PropTypes} from 'react'
import Conteudo from './Conteudo'
import LeftMenu from './LeftMenu'
import request from 'superagent'

class Centro extends Component {

    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
      event.defaultPrevented
      console.log(event.target)
      menu = {};
      var tela = event.target.href.split("#")[1];
      menu[tela] = 'active';
      var self = this;

      var x;
      request
        .get('/teste')
        .end(function(err, res){
          conteudo = res.text;
          self.setState([menu, conteudo])
        });

    }

    render = () =>

		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
            <LeftMenu onClick={this.handleClick} status={menu}/>
				</div>
				<div className="col-md-10">
				    <Conteudo conteudo={conteudo}/>
				</div>
			</div>
		</div>

}

var conteudo

var menu = {
  dashboard : 'active'
}

const s = {
    root: {
        "width" : "70px"
    }
}

export default Centro
