import React, {Component, PropTypes} from 'react'
import LeftMenu from './LeftMenu'
import Centro from './Centro'

class Tela extends Component {

    render = () =>
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
                    <LeftMenu />
				</div>
				<div className="col-md-10">
				    <Centro />
				</div>
			</div>
		</div>
}

export default Tela
