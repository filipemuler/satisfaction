import React, {Component, PropTypes} from 'react'

class LeftMenuEntry extends Component {

    render = () =>
      <li className={this.props.status}>
        <a href={this.props.href}>{this.props.name}</a>
      </li>
}

export default LeftMenuEntry
