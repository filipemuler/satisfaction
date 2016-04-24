import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Tab from 'react-bootstrap/lib/Tab'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Cadastro from './Cadastro'
import Movimentacao from './Movimentacao'
import request from 'superagent'

class Centro extends Component {

    constructor(props){
      super(props)
      this.handleSelect = this.handleSelect.bind(this)
    }

    componentWillMount(){
      this.setState({x : 'dashboard'})
    }

    handleSelect(selectedKey, event){
      // console.log(selectedKey)
      this.setState({x : selectedKey})
    }


    render = () =>
      <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard" onSelect={this.handleSelect}>
        <Row className="clearfix">
          <Col sm={2}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="dashboard" href="/home">Dashboard</NavItem>
              <NavItem eventKey="movimentacao" title="Item">Movimentação</NavItem>
              <NavItem eventKey="cadastros" disabled>Cadastros</NavItem>
              <NavItem eventKey="contas" title="Item">Contas</NavItem>
              <NavItem eventKey="filial" title="Item">Filial</NavItem>
              <NavItem eventKey="funcionario" title="Item">Funcionario</NavItem>
              <NavItem eventKey="usuario" title="Item">Usuario</NavItem>
              <NavItem eventKey="permissao" title="Item">Permissão</NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <Cadastro header="Dashboard" url="dashboard" t={this.state.x}/>
              </Tab.Pane>
              <Tab.Pane eventKey="movimentacao">
                <Movimentacao header="Movimentação" url="movimentacao" t={this.state.x}/>
              </Tab.Pane>
              <Tab.Pane eventKey="contas">
                <Cadastro header="Contas" url="contas" t={this.state.x}/>
              </Tab.Pane>
              <Tab.Pane eventKey="filial">
                <Cadastro header="Filial" url="filial" t={this.state.x}/>
              </Tab.Pane>
              <Tab.Pane eventKey="funcionario">
                <Cadastro header="Funcionario" url="funcionario" t={this.state.x}/>
              </Tab.Pane>
              <Tab.Pane eventKey="usuario">
                <Cadastro header="Usuario" url="usuario" t={this.state.x}/>
              </Tab.Pane>
              <Tab.Pane eventKey="permissao">
                <Cadastro header="Permissão" url="permissao" t={this.state.x}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

}

export default Centro
