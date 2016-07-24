package br.com.af.satisfaction.service;

import static java.math.RoundingMode.HALF_UP;

import java.math.BigDecimal;
import java.util.Date;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.MovimentacaoConta;
import br.com.af.satisfaction.entidades.bi.BiConsolidadoFinal;

/**
 * Created by filipe on 20/07/16.
 */
public class ConsolidadoFinalChainHandler implements MovimentacaoChainHandler {

    private GenericDao<BiConsolidadoFinal> service;
    private GenericDao<Movimentacao> movimentacaoService;
    private GenericDao<Conta> contaService;

    public ConsolidadoFinalChainHandler() {
    }

    @Inject
    public ConsolidadoFinalChainHandler(GenericDao<BiConsolidadoFinal> service, GenericDao<Movimentacao> movimentacaoService, GenericDao<Conta> contaService) {
        this.service = service;
        this.movimentacaoService = movimentacaoService;
        this.contaService = contaService;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {

        BiConsolidadoFinal consolidadoFinal = new BiConsolidadoFinal();
        consolidadoFinal.setData(new Date());
        consolidadoFinal.setFilialid(movimentacao.getFilial().getId().intValue());
        consolidadoFinal.setFilialnome(movimentacao.getFilial().getNome());

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
        consolidadoFinal.setReceita(receita);
        consolidadoFinal.setDespesa(despesa);
        if(!despesa.equals(BigDecimal.ZERO)) {
            BigDecimal divide = receita.divide(despesa, 4, HALF_UP);
            BigDecimal porcento = divide.multiply(new BigDecimal(100));
            consolidadoFinal.setPorcentagem(porcento.setScale(2, HALF_UP));
        }

        this.service.persist(consolidadoFinal);
    }

}
