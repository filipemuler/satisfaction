import React, {Component, PropTypes} from 'react'
import Conteudo from './Conteudo'
import LeftMenu from './LeftMenu'

class Centro extends Component {

    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
      event.defaultPrevented
      console.log(event.target)
    }

    render = () =>

		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
            <LeftMenu onClick={this.handleClick}/>
				</div>
				<div className="col-md-10">
				    <Conteudo />
				</div>
			</div>
		</div>

}

const s = {
    root: {
        "width" : "70px"
    }
}

export default Centro
