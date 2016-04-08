import React, {Component, PropTypes} from 'react'

class Centro extends Component {

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
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="dashboard"></div>
                        <div role="tabpanel" className="tab-pane" id="movimentacao"></div>
                        <div role="tabpanel" className="tab-pane" id="conta"></div>
                        <div role="tabpanel" className="tab-pane" id="filial"></div>
                        <div role="tabpanel" className="tab-pane" id="funcionario"></div>
                        <div role="tabpanel" className="tab-pane" id="usuario"></div>
                        <div role="tabpanel" className="tab-pane" id="permissao"></div>
                    </div>
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

export default Centro
