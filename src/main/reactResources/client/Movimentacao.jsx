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
    this.calculaTotalReceita = this.calculaTotalReceita.bind(this)
    this.calculaTotalDespesa = this.calculaTotalDespesa.bind(this)
    this.calculaTotalRecebimento = this.calculaTotalRecebimento.bind(this)
    this.calculaTotalFluxo = this.calculaTotalFluxo.bind(this)
    this.addAlert = this.addAlert.bind(this)
    this.state = {
      grupos : [],
      receitasFixas : [],
      despesasAdded : [],
      recebimentosAdded : [],
      fluxos : [],
      filiais : [],
      totalDespesa : 0,
      totalRecebimento : 0,
      totalReceita : 0,
      totalFluxo : 0,
      inputValue : '',
      dataTransacao : new Date().toISOString(),
      saldoAnterior : null,
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

  atualizaSaldo(filialid){
    var self = this
    request
      .get('movimentacao/saldos/' + filialid)
      .end(function(err, res){
        self.setState(res.body)
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
      ref.startsWith('recebimento-')){
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
        totalReceita : 0,
        totalFluxo : 0,
        saldoAnterior : null,
        inputValue : ''})
        for (var ref in self.refs) {
          if(ref.startsWith('receita-') || ref.startsWith('despesa-') ||
          ref.startsWith('recebimento-') ||ref.startsWith('fluxo-')){
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
      totalReceita : 0,
      totalFluxo : 0,
      saldoAnterior : null,
      inputValue : ''})
      for (var ref in this.refs) {
        if(ref.startsWith('receita-') || ref.startsWith('despesa-') ||
          ref.startsWith('recebimento-') ||ref.startsWith('fluxo-')){
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
      let self = this
      const footer = <Footer onSubmit={this.onHandleSubmit} onCancel={this.onCancel}/>
      let receitasFixas = this.state.receitasFixas.map(conta =>
        <MovimentacaoFixa key={conta.value}
          contaId={conta.value}
          title={conta.label}
          money="true"
          calculaTotal={this.calculaTotalReceita}
          ref={"receita-" + conta.value}/>
      )
      let despesas = this.state.despesasAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"despesa-" + conta.id}/>
      )
      let recebimentos = this.state.recebimentosAdded.map(conta =>
        <MovimentacaoAdded key={conta.id}
          contaId={conta.id}
          title={conta.label}
          inputValue={conta.value}
          disabled="true"
          ref={"recebimento-" + conta.id}/>
      )
      let fluxos = this.state.fluxos.map(fluxo =>
        <MovimentacaoFixa key={fluxo.value}
          contaId={fluxo.value}
          title={fluxo.label}
          calculaTotal={this.calculaTotalFluxo}
          ref={"fluxo-" + fluxo.value}/>
      )

      let saldoAnterior = 0;
      let saldoTransportar = 0;
      let saldoDia = 0;
      if(this.state.saldoAnterior != null){
        saldoAnterior =  this.state.saldoAnterior
      }
      saldoDia = this.state.totalReceita + this.state.totalRecebimento - this.state.totalDespesa
      saldoTransportar = saldoAnterior + saldoDia

      let admin = false;
      if(this.state.usuario != null){
         admin = JSON.parse(this.state.usuario.admin)
      }

      let panelDespesa
      if(this.state.despesas != undefined && this.state.despesas.length > 0){
        panelDespesa =  <Panel>
                      Despesas
                      {despesas}
                      <MovimentacaoAdd
                        options={this.state.despesas}
                        onAdded={this.addDespesa}
                        calculaTotal={this.calculaTotalDespesa}
                        ref="adicionaDespesa"/>
                      <MovimentacaoTotal label="Total Despesa" total={this.state.totalDespesa}/>
                    </Panel>
      }

      let panelRecebimentos
      if(this.state.recebimentos != undefined && this.state.recebimentos.length > 0){
        panelRecebimentos = <Panel>
          Recebimentos
          {recebimentos}
          <MovimentacaoAdd
            options={this.state.recebimentos}
            onAdded={this.addRecebimento}
            ref="adicionaRecebimento"/>
          <MovimentacaoTotal label="Total Recebimento" total={this.state.totalRecebimento}/>
        </Panel>
      }

      let panelFluxos
      if(this.state.fluxos != undefined && this.state.fluxos.length > 0){
        panelFluxos = <Panel>
          Fluxos
          {fluxos}
          <MovimentacaoTotal label="Total Fluxo" total={this.state.totalFluxo}/>
        </Panel>
      }

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
                  defaultValue={this.state.filial}
                  value={this.state.filial}
                  disabled={!admin}
                  onValueChange = {function(value) {
                        self.setState({filial: value});
                        console.log(value.value)
                        self.atualizaSaldo(value.value)
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

            {panelDespesa}

            {panelRecebimentos}

            {panelFluxos}

            <MovimentacaoTotal label="saldoAnterior" total={saldoAnterior}/>
            <MovimentacaoTotal label="Saldo Dia" total={saldoDia}/>
            <MovimentacaoTotal label="Saldo a Transportar" total={saldoTransportar}/>
          </Form>
          <ToastContainer ref="container"
            toastMessageFactory={ToastMessageFactory}
            className="toast-top-right" />
        </Panel>

      )
    }
}

export default Movimentacao
