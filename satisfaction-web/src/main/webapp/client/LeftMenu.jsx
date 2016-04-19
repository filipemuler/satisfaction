import React, {Component, PropTypes} from 'react'
import $ from 'jquery'
import LeftMenuEntry from './LeftMenuEntry'

class LeftMenu extends Component {

    constructor(props) {
      super(props);
      //no es6 não temos o autobind do this
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
      event.defaultPrevented
    }

    render = () =>
        <ul className="nav nav-pills nav-stacked" onClick={this.props.onClick}>
             <LeftMenuEntry href="#dashboard" name="Dashboard" status={this.props.status.dashboard}/>
             <LeftMenuEntry href="#movimentacao" name="Movimentação" status={this.props.status.movimentacao}/>
             <LeftMenuEntry name="Cadastros" status="disabled"/>
             <LeftMenuEntry href="#contas" name="Contas" status={this.props.status.contas}/>
             <LeftMenuEntry href="#filial" name="Filial" status={this.props.status.filial}/>
             <LeftMenuEntry href="#funcionario" name="Funcionario" status={this.props.status.funcionario}/>
             <LeftMenuEntry href="#usuario" name="Usuario" status={this.props.status.usuario}/>
             <LeftMenuEntry href="#permissao" name="Permissão" status={this.props.status.permissao}/>
        </ul>
}

export default LeftMenu
