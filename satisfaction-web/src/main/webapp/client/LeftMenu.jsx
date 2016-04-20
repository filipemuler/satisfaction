import React, {Component, PropTypes} from 'react'
import LeftMenuEntry from './LeftMenuEntry'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'


class LeftMenu extends Component {

  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

    handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }

    render = () =>
      <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home">Dashboard</NavItem>
        <NavItem eventKey={2} title="Item">Movimentação</NavItem>
        <NavItem eventKey={3} disabled>Cadastros</NavItem>
        <NavItem eventKey={4} title="Item">Contas</NavItem>
        <NavItem eventKey={5} title="Item">Filial</NavItem>
        <NavItem eventKey={6} title="Item">Funcionario</NavItem>
        <NavItem eventKey={7} title="Item">Usuario</NavItem>
        <NavItem eventKey={8} title="Item">Permissão</NavItem>
      </Nav>

        // <ul className="nav nav-pills nav-stacked" onClick={this.props.onClick}>
        //      <LeftMenuEntry href="#dashboard" name="Dashboard" status={this.props.status.dashboard}/>
        //      <LeftMenuEntry href="#movimentacao" name="Movimentação" status={this.props.status.movimentacao}/>
        //      <LeftMenuEntry name="Cadastros" status="disabled"/>
        //      <LeftMenuEntry href="#contas" name="Contas" status={this.props.status.contas}/>
        //      <LeftMenuEntry href="#filial" name="Filial" status={this.props.status.filial}/>
        //      <LeftMenuEntry href="#funcionario" name="Funcionario" status={this.props.status.funcionario}/>
        //      <LeftMenuEntry href="#usuario" name="Usuario" status={this.props.status.usuario}/>
        //      <LeftMenuEntry href="#permissao" name="Permissão" status={this.props.status.permissao}/>
        // </ul>
}

export default LeftMenu
