import React, {Component, PropTypes} from 'react'
import $ from 'jquery'

class LeftMenu extends Component {

    handleClick (event) {
        var target = event.target
        console.log(event)
        event.tab('show')


     }


    render = () =>
        <ul className="nav nav-pills nav-stacked" id="myTabs">
            <li className="active"><a href="#dashboard" data-whatever="${app}/dashboard/form" onClick={this.handleClick}>Dashboard</a></li>
            <li><a href="#movimentacao" data-whatever="${app}/movimentacao/form" onClick={this.handleClick}>Movimentações</a></li>
            <li className="disabled"><a href="#cadastros">Cadastros</a></li>
            <li><a href="#conta" data-whatever="${app}/conta/form" onClick={this.handleClick}>Contas</a></li>
            <li><a href="#filial" data-whatever="${app}/filial/list" onClick={this.handleClick}>Filial</a></li>
            <li><a href="#funcionario" data-whatever="${app}/funcionario/list" onClick={this.handleClick}>Funcionario</a></li>
            <li><a href="#usuario" data-whatever="${app}/usuario/list" onClick={this.handleClick}>Usuario</a></li>
            <li><a href="#permissao" data-whatever="${app}/permissao/list" onClick={this.handleClick}>Permissão</a></li>
        </ul>
}

export default LeftMenu
