package br.com.af.satisfaction.service;

import static java.math.BigDecimal.ROUND_DOWN;

import java.math.BigDecimal;
import java.util.Date;

import javax.inject.Inject;
import javax.transaction.Transactional;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.MovimentacaoConta;
import br.com.af.satisfaction.entidades.bi.BiConsolidadoFinal;

/**
 * Created by filipe on 20/07/16.
 */
@Transactional
public class ConsolidadoFinalChainHandler implements MovimentacaoChainHandler {

    private GenericDao<BiConsolidadoFinal> service;
    private GenericDao<Movimentacao> movimentacaoService;

    public ConsolidadoFinalChainHandler() {
    }

    @Inject
    public ConsolidadoFinalChainHandler(GenericDao<BiConsolidadoFinal> service, GenericDao<Movimentacao> movimentacaoService) {
        this.service = service;
        this.movimentacaoService = movimentacaoService;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {
        movimentacao = this.movimentacaoService.findById(movimentacao.getId(), Movimentacao.class);

        BiConsolidadoFinal consolidadoFinal = new BiConsolidadoFinal();
        consolidadoFinal.setData(new Date());
//        consolidadoFinal.setFilialId(movimentacao.getFilial().getId());
//        consolidadoFinal.setFilialNome(movimentacao.getFilial().getNome());

        BigDecimal despesa = BigDecimal.ZERO;
        BigDecimal receita = BigDecimal.ZERO;
        for(MovimentacaoConta conta : movimentacao.getMovimentacoesConta()){
            if(conta.getConta().isEntrada()){
                receita = receita.add(conta.getValor());
            }else{
                despesa = despesa.add(conta.getValor());
            }
        }
        consolidadoFinal.setReceita(receita);
        consolidadoFinal.setDespesa(despesa);
        if(!despesa.equals(BigDecimal.ZERO)) {
            consolidadoFinal.setPorcentagem(receita.divide(despesa, ROUND_DOWN).floatValue());
        }

        this.service.persist(consolidadoFinal);
    }
}
