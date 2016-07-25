import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Col from 'react-bootstrap/lib/Col'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import request from 'superagent'
import MovimentacaoAdded from './MovimentacaoAdded'
import MovimentacaoFixa from './MovimentacaoFixa'
import MovimentacaoAdd from './MovimentacaoAdd'
import Footer from './Footer'
import SimpleSelect from 'react-selectize/src/SimpleSelect'

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.addDespesa = this.addDespesa.bind(this)
    this.addRecebimento = this.addRecebimento.bind(this)
    this.addCartaoEntrada = this.addCartaoEntrada.bind(this)
    this.addCartaoSaida = this.addCartaoSaida.bind(this)
    this.state = {
      grupos : [],
      receitasFixas : [],
      despesasAdded : [],
      recebimentosAdded : [],
      cartoesSaidaAdded : [],
      cartoesEntradaAdded : [],
      fluxos : [],
      filiais : [],
      inputValue : ''
    }
  }

  componentDidMount(){
    var self = this
    request
      .get('movimentacao/list/contas')
      .end(function(err, res){
        self.setState(res.body);
      });
  }

  onHandleSubmit(){
    var self = this
    var submit = {movimentacao : { movimentacoesConta : [], filial : {}, movimentacoesFluxo : []}}
    submit.movimentacao.filial.id = this.refs.filial.value().value
    submit.movimentacao.filial.nome = this.refs.filial.value().label
    for (var ref in this.refs) {
      if(ref.startsWith('conta-')){
        submit.movimentacao.movimentacoesConta.push(this.refs[ref].getFormData())
      }
      if(ref.startsWith('fluxo-')){
        submit.movimentacao.movimentacoesFluxo.push(this.refs[ref].getFormData())
      }
     }
    request
      .post('movimentacao/salvar')
      .send(submit)
      .end(function(err, res){
        self.setState({
        despesasAdded : [],
        recebimentosAdded : [],
        cartoesSaidaAdded : [],
        cartoesEntradaAdded : [],
        filial : null,
        inputValue : ''})
        for (var ref in self.refs) {
          if(ref.startsWith('conta-') || ref.startsWith('fluxo-')){
            if (typeof self.refs[ref].reset === "function") {
              self.refs[ref].reset();
            }
          }
         }
      });
    }

    onCancel(){
      this.setState({
      despesasAdded : [],
      recebimentosAdded : [],
      cartoesSaidaAdded : [],
      cartoesEntradaAdded : [],
      filial : null,
      inputValue : ''})
      for (var ref in this.refs) {
        if(ref.startsWith('conta-') || ref.startsWith('fluxo-')){
          if (typeof this.refs[ref].reset === "function") {
            this.refs[ref].reset();
          }
        }
       }
    }

    addDespesa(id, label, value){
      this.setState({ despesasAdded :
        this.state.despesasAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
    }
    addRecebimento(id, label, value){

      this.setState({ recebimentosAdded :
        this.state.recebimentosAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
    }
    addCartaoEntrada(id, label, value){

      this.setState({ cartoesEntradaAdded :
        this.state.cartoesEntradaAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
    }
    addCartaoSaida(id, label, value){

      this.setState({ cartoesSaidaAdded :
        this.state.cartoesSaidaAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
    }
    render () {
      var self = this
      const footer = <Footer onSubmit={this.onHandleSubmit} onCancel={this.onCancel}/>
      var receitasFixas = this.state.receitasFixas.map(conta =>
        <MovimentacaoFixa key={conta.value}
          contaId={conta.value}
          title={conta.label}
          money="true"
          ref={"conta-" + conta.value}/>
      )
      var despesas = this.state.despesasAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"conta-" + conta.id}/>
      )
      var recebimentos = this.state.recebimentosAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"conta-" + conta.id}/>
      )
      var cartoesEntrada = this.state.cartoesEntradaAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"conta-" + conta.id}/>
      )
      var cartoesSaida = this.state.cartoesSaidaAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"conta-" + conta.id}/>
      )
      var fluxos = this.state.fluxos.map(fluxo =>
        <MovimentacaoFixa key={fluxo.value}
          contaId={fluxo.value}
          title={fluxo.label}
          ref={"fluxo-" + fluxo.value}/>
      )
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>Filial</Col>
              <Col smOffset={1} sm={4}>
                <SimpleSelect
                  options = {this.state.filiais}
                  placeholder = "Selecione..."
                  value={this.state.filial}
                  onValueChange = {function(value) {
                        self.setState({filial: value});
                  }}
                  ref="filial"/>
              </Col>
            </FormGroup>
            {receitasFixas}
            <Panel>
              Despesas
              {despesas}
              <MovimentacaoAdd
                options={this.state.despesas}
                onAdded={this.addDespesa}
                ref="adicionaDespesa"/>
            </Panel>
            <Panel>
              Recebimentos
              {recebimentos}
              <MovimentacaoAdd
                options={this.state.recebimentos}
                onAdded={this.addRecebimento}
                ref="adicionaRecebimento"/>
            </Panel>
            <Panel>
              Cartões Entrada
              {cartoesEntrada}
              <MovimentacaoAdd
                options={this.state.cartoesEntrada}
                onAdded={this.addCartaoEntrada}
                ref="adicionaCartaoEntrada"/>
            </Panel>
            <Panel>
              Cartões Saida
              {cartoesSaida}
              <MovimentacaoAdd
                options={this.state.cartoesSaida}
                onAdded={this.addCartaoSaida}
                ref="adicionaCartaoSaida"/>
            </Panel>
            <Panel>
              Fluxos
              {fluxos}
            </Panel>
          </Form>
        </Panel>
      )
    }
}

export default Movimentacao
