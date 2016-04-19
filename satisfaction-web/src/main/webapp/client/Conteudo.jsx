import React, {Component, PropTypes} from 'react'
import ConteudoVariavel from './ConteudoVariavel'

class Conteudo extends Component {

    render = () =>
    <div className="clearfix">
        <div className="well well-sm ">
            <img alt="Brand" src="./imgs/mbr2.png" style={s.root}/>
            <div className="pull-right">
                <input type="text" className="input-sm" placeholder="Search"/>
                <button type="button" className="btn btn-sm btn-default ">button</button>
            </div>
        </div>
        <div class="row">
            <div className="col-md-8">
                <ConteudoVariavel conteudo={this.props.conteudo}/>
            </div>
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">Faturamento</div>
                    <div className="panel-body">
                        bla bla
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const s = {
    root: {
        "width" : "70px"
    }
}

export default Conteudo
