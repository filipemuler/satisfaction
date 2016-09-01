package br.com.af.satisfaction.service;

import static java.math.RoundingMode.HALF_UP;

import java.math.BigDecimal;
import java.util.Date;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.MovimentacaoConta;
import br.com.af.satisfaction.entidades.bi.ConsolidadoMes;

/**
 * Created by filipe on 20/07/16.
 */
public class ConsolidadoMesChainHandler implements MovimentacaoChainHandler {

    private GenericDao<ConsolidadoMes> service;
    private GenericDao<Conta> contaService;

    public ConsolidadoMesChainHandler() {
    }

    @Inject
    public ConsolidadoMesChainHandler(GenericDao<ConsolidadoMes> service, GenericDao<Conta> contaService) {
        this.service = service;
        this.contaService = contaService;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {
        ConsolidadoMes consolidadoMes = new ConsolidadoMes();
        consolidadoMes.setData(new Date());
        consolidadoMes.setFilialid(movimentacao.getFilial().getId().intValue());
        consolidadoMes.setFilialnome(movimentacao.getFilial().getNome());

        BigDecimal despesa = BigDecimal.ZERO;
        BigDecimal receita = BigDecimal.ZERO;
        for(MovimentacaoConta conta : movimentacao.getMovimentacoesConta()){
            Conta contaRecuperada = this.contaService.findById(conta.getConta().getId(), Conta.class);
            if(contaRecuperada.isEntrada()){
                receita = receita.add(conta.getValor());
            }else{
                despesa = despesa.add(conta.getValor());
            }
        }
        consolidadoMes.setReceita(receita);
        consolidadoMes.setDespesa(despesa);
        BigDecimal receitaMaisDespesa = consolidadoMes.getReceita().add(consolidadoMes.getDespesa());
        if(!despesa.equals(BigDecimal.ZERO)) {
            BigDecimal divide = receitaMaisDespesa.divide(despesa, 4, HALF_UP);
            BigDecimal porcento = divide.multiply(new BigDecimal(100));
            consolidadoMes.setPorcentagem(porcento.setScale(2, HALF_UP));
        }

        this.service.persist(consolidadoMes);
    }
}
