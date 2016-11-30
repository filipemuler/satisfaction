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

class CentroUser extends Component {

    render = () =>
        <Movimentacao contexto="Movimentacao"/>
}

export default CentroUser
