import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Tab from 'react-bootstrap/lib/Tab'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Conteudo from './Conteudo'
import LeftMenu from './LeftMenu'
import request from 'superagent'

class Centro extends Component {

    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
      this.handleSelect = this.handleSelect.bind(this)
    }

    handleClick(event){
      // event.defaultPrevented
      // console.log(event.target)
      // menu = {};
      // var tela = event.target.href.split("#")[1];
      // menu[tela] = 'active';
      // var self = this;

      request
        .get('/' + tela)
        .end(function(err, res){
          conteudo = res.text;
          self.setState([menu, conteudo])
        });

    }

    handleSelect(selectedKey){
      request
        .get('/' + selectedKey)
        .end(function(err, res){
          console.log(selectedKey)
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
            <Tab.Content animation>
              <Tab.Pane eventKey="dashboard">
              </Tab.Pane>
              <Tab.Pane eventKey="movimentacao">
              </Tab.Pane>
              <Tab.Pane eventKey="contas">
                contas
              </Tab.Pane>
              <Tab.Pane eventKey="filial">
                filial
              </Tab.Pane>
              <Tab.Pane eventKey="funcionario">
                funcionario
              </Tab.Pane>
              <Tab.Pane eventKey="usuario">
                usuario
              </Tab.Pane>
              <Tab.Pane eventKey="permissao">
                permissao
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
		// <div className="container-fluid">
		// 	<div className="row">
		// 		<div className="col-md-2">
    //         <LeftMenu onClick={this.handleClick} status={menu}/>
		// 		</div>
		// 		<div className="col-md-10">
		// 		    <Conteudo conteudo={conteudo}/>
		// 		</div>
		// 	</div>
		// </div>

}

var conteudo

var menu = {
  dashboard : 'active'
}

const s = {
    root: {
        "width" : "70px"
    }
}

export default Centro
