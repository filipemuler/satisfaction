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
import MovimentacaoTotal from './MovimentacaoTotal'
import Footer from './Footer'
import SimpleSelect from 'react-selectize/src/SimpleSelect'
import DatePicker from 'react-bootstrap-date-picker'
import ReactToastr, {ToastContainer, ToastMessage} from 'react-toastr'

let ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Movimentacao extends Component {

  constructor(props){
    super(props)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.addDespesa = this.addDespesa.bind(this)
    this.addRecebimento = this.addRecebimento.bind(this)
    this.addCartaoEntrada = this.addCartaoEntrada.bind(this)
    this.addCartaoSaida = this.addCartaoSaida.bind(this)
    this.calculaTotalReceita = this.calculaTotalReceita.bind(this)
    this.calculaTotalDespesa = this.calculaTotalDespesa.bind(this)
    this.calculaTotalRecebimento = this.calculaTotalRecebimento.bind(this)
    this.calculaTotalCartaoEntrada = this.calculaTotalCartaoEntrada.bind(this)
    this.calculaTotalCartaoSaida = this.calculaTotalCartaoSaida.bind(this)
    this.calculaTotalFluxo = this.calculaTotalFluxo.bind(this)
    this.addAlert = this.addAlert.bind(this)
    this.state = {
      grupos : [],
      receitasFixas : [],
      despesasAdded : [],
      recebimentosAdded : [],
      cartoesSaidaAdded : [],
      cartoesEntradaAdded : [],
      fluxos : [],
      filiais : [],
      totalDespesa : 0,
      totalRecebimento : 0,
      totalCartaoEntrada : 0,
      totalCartaoSaida : 0,
      totalReceita : 0,
      totalFluxo : 0,
      inputValue : '',
      dataTransacao : new Date().toISOString(),
      usuario : { admin : false}
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
    try{
      submit.movimentacao.filial.id = this.refs.filial.value().value
      submit.movimentacao.filial.nome = this.refs.filial.value().label
    }catch(err){
      self.refs.container.error("Selecione uma filial!!","", {
          timeOut: 5000,
          extendedTimeOut: 10000
      });
      throw err;
    }
    submit.movimentacao.dataTransacao = this.state.dataTransacao.substring(0,19) + 'Z'
    for (var ref in this.refs) {
      if(ref.startsWith('receita-') || ref.startsWith('despesa-') ||
      ref.startsWith('recebimento-') || ref.startsWith('cartaoEntrada-') ||
      ref.startsWith('cartaoSaida-')){
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
        totalDespesa : 0,
        totalRecebimento : 0,
        totalCartaoEntrada : 0,
        totalCartaoSaida : 0,
        totalReceita : 0,
        totalFluxo : 0,
        inputValue : ''})
        for (var ref in self.refs) {
          if(ref.startsWith('receita-') || ref.startsWith('despesa-') ||
          ref.startsWith('recebimento-') || ref.startsWith('cartaoEntrada-') ||
          ref.startsWith('cartaoSaida-') ||ref.startsWith('fluxo-')){
            if (typeof self.refs[ref].reset === "function") {
              self.refs[ref].reset();
            }
          }
         }
         self.refs.container.success(
           "Salvo com sucesso!!","", {
             timeOut: 5000,
             extendedTimeOut: 10000
         });
      });
    }

    onCancel(){
      this.setState({
      despesasAdded : [],
      recebimentosAdded : [],
      cartoesSaidaAdded : [],
      cartoesEntradaAdded : [],
      filial : null,
      totalDespesa : 0,
      totalRecebimento : 0,
      totalCartaoEntrada : 0,
      totalCartaoSaida : 0,
      totalReceita : 0,
      totalFluxo : 0,
      inputValue : ''})
      for (var ref in this.refs) {
        if(ref.startsWith('receita-') || ref.startsWith('despesa-') ||
          ref.startsWith('recebimento-') || ref.startsWith('cartaoEntrada-') ||
          ref.startsWith('cartaoSaida-') ||ref.startsWith('fluxo-')){
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
      this.calculaTotalDespesa(value);
    }
    addRecebimento(id, label, value){

      this.setState({ recebimentosAdded :
        this.state.recebimentosAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
      this.calculaTotalRecebimento(value)
    }
    addCartaoEntrada(id, label, value){

      this.setState({ cartoesEntradaAdded :
        this.state.cartoesEntradaAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
      this.calculaTotalCartaoEntrada(value)
    }
    addCartaoSaida(id, label, value){

      this.setState({ cartoesSaidaAdded :
        this.state.cartoesSaidaAdded.concat(
          {id : id, label : label, value : value}
        )}
      )
      this.calculaTotalCartaoSaida(value)
    }

    calculaTotalReceita(){
      let total = 0;
      for (var ref in this.refs) {
        if(ref.startsWith('receita-')){
          total += Number(this.refs[ref].getFormData().valor) ;
        }
       }
       this.setState({totalReceita : total})
    }

    calculaTotalDespesa(value){
       this.setState({totalDespesa : this.state.totalDespesa + Number(value)})
    }

    calculaTotalRecebimento(value){
      this.setState({totalRecebimento : this.state.totalRecebimento + Number(value)})
    }

    calculaTotalCartaoEntrada(value){
      this.setState({totalCartaoEntrada : this.state.totalCartaoEntrada + Number(value)})
    }

    calculaTotalCartaoSaida(value){
      this.setState({totalCartaoSaida : this.state.totalCartaoSaida + Number(value)})
    }

    calculaTotalFluxo(){
      let total = 0;
      for (var ref in this.refs) {
        if(ref.startsWith('fluxo-')){
          total += Number(this.refs[ref].getFormData().quantidade) ;
        }
       }
       this.setState({totalFluxo : total})
    }

    addAlert () {

      //  window.open("http://youtu.be/3SR75k7Oggg");
      }

    render () {
      var self = this
      const footer = <Footer onSubmit={this.onHandleSubmit} onCancel={this.onCancel}/>
      var receitasFixas = this.state.receitasFixas.map(conta =>
        <MovimentacaoFixa key={conta.value}
          contaId={conta.value}
          title={conta.label}
          money="true"
          calculaTotal={this.calculaTotalReceita}
          ref={"receita-" + conta.value}/>
      )
      var despesas = this.state.despesasAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"despesa-" + conta.id}/>
      )
      var recebimentos = this.state.recebimentosAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"recebimento-" + conta.id}/>
      )
      var cartoesEntrada = this.state.cartoesEntradaAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"cartaoEntrada-" + conta.id}/>
      )
      var cartoesSaida = this.state.cartoesSaidaAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"cartaoSaida-" + conta.id}/>
      )
      var fluxos = this.state.fluxos.map(fluxo =>
        <MovimentacaoFixa key={fluxo.value}
          contaId={fluxo.value}
          title={fluxo.label}
          calculaTotal={this.calculaTotalFluxo}
          ref={"fluxo-" + fluxo.value}/>
      )
      var admin = (this.state.usuario.admin === 'true');
      return(
        <Panel header={this.props.contexto} footer={footer}>
          <Form horizontal>
            <FormGroup>
              <Col sm={2}>
                <ControlLabel>Filial</ControlLabel>
              </Col>
              <Col sm={4}>
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
            <FormGroup>
              <Col sm={2}>
                <ControlLabel>Data</ControlLabel>
              </Col>
              <Col sm={4}>
                <DatePicker value={this.state.dataTransacao}
                  disabled={!admin}
                  dateFormat="DD/MM/YYYY"
                  onChange = {function(value) {
                      self.setState({dataTransacao: value});
                    }}
                  ref="dataTransacao"/>
              </Col>
            </FormGroup>


            {receitasFixas}
            <MovimentacaoTotal label="Total Receita" total={this.state.totalReceita}/>
            <Panel>
              Despesas
              {despesas}
              <MovimentacaoAdd
                options={this.state.despesas}
                onAdded={this.addDespesa}
                calculaTotal={this.calculaTotalDespesa}
                ref="adicionaDespesa"/>
              <MovimentacaoTotal label="Total Despesa" total={this.state.totalDespesa}/>
            </Panel>
            <Panel>
              Recebimentos
              {recebimentos}
              <MovimentacaoAdd
                options={this.state.recebimentos}
                onAdded={this.addRecebimento}
                ref="adicionaRecebimento"/>
              <MovimentacaoTotal label="Total Recebimento" total={this.state.totalRecebimento}/>
            </Panel>
            <Panel>
              Cartões Saida
              {cartoesSaida}
              <MovimentacaoAdd
                options={this.state.cartoesSaida}
                onAdded={this.addCartaoSaida}
                ref="adicionaCartaoSaida"/>
              <MovimentacaoTotal label="Total Cartões Saida" total={this.state.totalCartaoSaida}/>
            </Panel>
            <Panel>
              Cartões Entrada
              {cartoesEntrada}
              <MovimentacaoAdd
                options={this.state.cartoesEntrada}
                onAdded={this.addCartaoEntrada}
                ref="adicionaCartaoEntrada"/>
              <MovimentacaoTotal label="Total Cartões Entrada" total={this.state.totalCartaoEntrada}/>
            </Panel>
            <Panel>
              Fluxos
              {fluxos}
              <MovimentacaoTotal label="Total Fluxo" total={this.state.totalFluxo}/>
            </Panel>
            <MovimentacaoTotal label="Total Geral" total={this.state.totalReceita + this.state.totalRecebimento - this.state.totalDespesa
              + this.state.totalCartaoEntrada  - this.state.totalCartaoSaida}/>
          </Form>
          <ToastContainer ref="container"
                                  toastMessageFactory={ToastMessageFactory}
                                  className="toast-top-right" />
        </Panel>

      )
    }
}

export default Movimentacao
