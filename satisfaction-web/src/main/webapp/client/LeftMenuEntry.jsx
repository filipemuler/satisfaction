import React, {Component, PropTypes} from 'react'

class LeftMenu extends Component {

    render = () =>
        <ul className="nav nav-pills nav-stacked" id="myTabs">
            <li className="active"><a href="#dashboard" data-whatever="${app}/dashboard/form" >Dashboard</a></li>
            <li><a href="#movimentacao" data-whatever="${app}/movimentacao/form" >Movimentações</a></li>
            <li className="disabled"><a href="#cadastros">Cadastros</a></li>
            <li><a href="#conta" data-whatever="${app}/conta/form" >Contas</a></li>
            <li><a href="#filial" data-whatever="${app}/filial/list" >Filial</a></li>
            <li><a href="#funcionario" data-whatever="${app}/funcionario/list">Funcionario</a></li>
            <li><a href="#usuario" data-whatever="${app}/usuario/list">Usuario</a></li>
            <li><a href="#permissao" data-whatever="${app}/permissao/list">Permissão</a></li>
        </ul>
}

export default LeftMenu
