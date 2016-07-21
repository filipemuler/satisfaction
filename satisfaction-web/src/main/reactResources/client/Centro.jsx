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
      this.state = {dashboard : [], contexto : 'dashboard', update : false}
      this.handleSelect = this.handleSelect.bind(this)
    }


    handleSelect(selectedKey, event){
      var self = this
      if(selectedKey != 'movimentacao' && selectedKey != 'dashboard'){
        request
          .get(selectedKey + '/list')
          .end(function(err, res){
            var stateObject = function() {
              var returnObj = {};
              returnObj[selectedKey] = res.body;
              returnObj['contexto'] = selectedKey;
              return returnObj;
            }.bind(event)();
            self.setState(stateObject)
          });
        }else{
          if(selectedKey == 'dashboard'){
            this.setState({update : true})
          }
        }
    }

    render () {
      return (
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
                  <Dashboard  contexto={this.state.contexto} ajax={this.state.dashboard}
                    update={this.state.update}/>
                </Tab.Pane>
                <Tab.Pane eventKey="movimentacao">
                  <Movimentacao contexto={this.state.contexto} ajax={this.state.movimentacao}/>
                </Tab.Pane>
                <Tab.Pane eventKey="contas">
                  <Cadastro key="contas" contexto={this.state.contexto} ajax={this.state.contas}/>
                </Tab.Pane>
                <Tab.Pane eventKey="filial">
                  <Cadastro contexto={this.state.contexto} ajax={this.state.filial}/>
                </Tab.Pane>
                <Tab.Pane eventKey="funcionario">
                  <Cadastro contexto={this.state.contexto} ajax={this.state.funcionario}/>
                </Tab.Pane>
                <Tab.Pane eventKey="usuario">
                  <Cadastro contexto={this.state.contexto} ajax={this.state.usuario}/>
                </Tab.Pane>
                <Tab.Pane eventKey="permissao">
                  <Cadastro contexto={this.state.contexto} ajax={this.state.permissao}/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )
    }
}

export default Centro
