import React, {Component, PropTypes} from 'react'
import Conteudo from './Conteudo'
import LeftMenu from './LeftMenu'
import $ from 'jquery'

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
      this.setState(menu);

      this.serverRequest = $.get('http://www.google.com', function (result) {
        conteudo = result[0];
      }.bind(this));

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

var conteudo = {}

var menu = {
  dashboard : 'active'
}

const s = {
    root: {
        "width" : "70px"
    }
}

export default Centro
