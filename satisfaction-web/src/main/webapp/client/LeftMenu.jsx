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
      var target = event.target
      menu = {};
      var tela = target.href.split("#")[1];
      menu[tela] = 'active';
      this.setState(menu);
    }

    render = () =>
        <ul className="nav nav-pills nav-stacked" onClick={this.props.onClick}>
             <LeftMenuEntry href="#dashboard" name="Dashboard" status={menu.dashboard}/>
             <LeftMenuEntry href="#movimentacao" name="Movimentação" status={menu.movimentacao}/>
             <LeftMenuEntry name="Cadastros" status="disabled"/>
             <LeftMenuEntry href="#contas" name="Contas" status={menu.contas}/>
             <LeftMenuEntry href="#filial" name="Filial" status={menu.filial}/>
             <LeftMenuEntry href="#funcionario" name="Funcionario" status={menu.funcionario}/>
             <LeftMenuEntry href="#usuario" name="Usuario" status={menu.usuario}/>
             <LeftMenuEntry href="#permissao" name="Permissão" status={menu.permissao}/>
        </ul>
}

var menu = {
  dashboard : 'active'
}

export default LeftMenu
