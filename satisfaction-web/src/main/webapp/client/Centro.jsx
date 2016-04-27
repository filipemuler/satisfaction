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
      this.state = {url : 'dashboard'}
      this.handleSelect = this.handleSelect.bind(this)
    }

    componentWillMount(){
      // this.setState({x : 'dashboard'})
    }

    handleSelect(selectedKey, event){
      // console.log(selectedKey)
      // this.setState({url : selectedKey})
      event.preventDefault();
      var self = this
      request
        .get('/' + selectedKey)
        .end(function(err, res){
          self.setState(res.body)
        });
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
                <Dashboard id="dashboard" json={this.state.dashboard}/>
              </Tab.Pane>
              <Tab.Pane eventKey="movimentacao">
                <Movimentacao id="movimentacao" json={this.state.movimentacao}/>
              </Tab.Pane>
              <Tab.Pane eventKey="contas">
                <Cadastro id="contas" json={this.state.contas}/>
              </Tab.Pane>
              <Tab.Pane eventKey="filial">
                <Cadastro id="filial" json={this.state.filial}/>
              </Tab.Pane>
              <Tab.Pane eventKey="funcionario">
                <Cadastro id="funcionario" json={this.state.funcionario}/>
              </Tab.Pane>
              <Tab.Pane eventKey="usuario">
                <Cadastro id="usuario" json={this.state.usuario}/>
              </Tab.Pane>
              <Tab.Pane eventKey="permissao">
                <Cadastro id="permissao" json={this.state.permissao}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

}

export default Centro
