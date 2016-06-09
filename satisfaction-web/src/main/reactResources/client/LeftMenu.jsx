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

}

export default LeftMenu
