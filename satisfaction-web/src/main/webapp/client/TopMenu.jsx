import React, {Component, PropTypes} from 'react'
import Tela from './Tela'

class TopMenu extends Component {

    render = () =>
        <div>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="nav-item nav-link" href="#">Dashboard</a></li>
                            <li><a className="nav-item nav-link" href="#">Settings</a></li>
                            <li><a className="nav-item nav-link" href="#">Profile</a></li>
                            <li><a className="nav-item nav-link" href="${app}/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Tela />
        </div>
}

export default TopMenu
