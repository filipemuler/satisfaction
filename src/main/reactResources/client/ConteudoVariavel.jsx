import React, {Component, PropTypes} from 'react'

class ConteudoVariavel extends Component {


    render = () =>
    <div className="panel panel-default">
      <div className="panel-heading">Conteudo</div>
      <div className="panel-body">{this.props.conteudo}
      </div>
    </div>
}

var conteudo = {}

const s = {
    root: {
        "width" : "70px"
    }
}

export default ConteudoVariavel
