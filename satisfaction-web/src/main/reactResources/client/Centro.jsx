import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Tab from 'react-bootstrap/lib/Tab'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Cadastro from './Cadastro'
import Dashboard from './Dashboard'
import Movimentacao from './Movimentacao'
import request from 'superagent'

class Centro extends Component {

    constructor(props){
      super(props)
      this.state = {contexto : 'dashboard'}
      this.handleSelect = this.handleSelect.bind(this)
    }


    handleSelect(selectedKey, event){
      this.setState({contexto : selectedKey})
    }

    render () {

      var dashboard = null;
      var movimentacao = null;
      var contas = null;
      var fluxo = null;
      var filial = null;
      var funcionario = null;
      var usuario = null;
      var permissao = null;
      var grupoconta = null;
      var perfilusuario = null;

      switch(this.state.contexto){
        case 'dashboard':
          dashboard = <Dashboard  contexto="Dashboard"/>
          break
        case 'movimentacao':
          movimentacao = <Movimentacao contexto="Movimentacao"/>
          break
        case 'contas':
          contas = <Cadastro contexto="contas"/>
          break
        case 'fluxo':
          fluxo = <Cadastro contexto="fluxo"/>
          break
        case 'filial':
          filial = <Cadastro contexto="filial"/>
          break
        case 'funcionario':
          funcionario = <Cadastro contexto="funcionario"/>
          break
        case 'usuario':
          usuario = <Cadastro contexto="usuario"/>
          break
        case 'permissao':
          permissao = <Cadastro contexto="permissao"/>
          break
        case 'grupoconta':
          grupoconta = <Cadastro contexto="grupoconta"/>
          break
        case 'perfilusuario':
          perfilusuario = <Cadastro contexto="perfilusuario"/>
          break
      }
      return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard" onSelect={this.handleSelect}>
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="dashboard" href="/home">Dashboard</NavItem>
                <NavItem eventKey="movimentacao" title="Item">Movimentação</NavItem>
                <NavItem eventKey="cadastros" disabled>Cadastros</NavItem>
                <NavItem eventKey="contas" title="Item">Contas</NavItem>
                <NavItem eventKey="grupoconta" title="Item">Grupo Conta</NavItem>
                <NavItem eventKey="fluxo" title="Item">Fluxo</NavItem>
                <NavItem eventKey="filial" title="Item">Filial</NavItem>
                <NavItem eventKey="funcionario" title="Item">Funcionario</NavItem>
                <NavItem eventKey="usuario" title="Item">Usuario</NavItem>
                <NavItem eventKey="perfilusuario" title="Item">Perfil Usuario</NavItem>
                <NavItem eventKey="permissao" title="Item">Permissão</NavItem>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                  {dashboard}
                </Tab.Pane>
                <Tab.Pane eventKey="movimentacao">
                  {movimentacao}
                </Tab.Pane>
                <Tab.Pane eventKey="contas">
                  {contas}
                </Tab.Pane>
                <Tab.Pane eventKey="grupoconta">
                  {grupoconta}
                </Tab.Pane>
                <Tab.Pane eventKey="fluxo">
                  {fluxo}
                </Tab.Pane>
                <Tab.Pane eventKey="filial">
                  {filial}
                </Tab.Pane>
                <Tab.Pane eventKey="funcionario">
                  {funcionario}
                </Tab.Pane>
                <Tab.Pane eventKey="usuario">
                  {usuario}
                </Tab.Pane>
                <Tab.Pane eventKey="perfilusuario">
                  {perfilusuario}
                </Tab.Pane>
                <Tab.Pane eventKey="permissao">
                  {permissao}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )
    }
}

export default Centro
