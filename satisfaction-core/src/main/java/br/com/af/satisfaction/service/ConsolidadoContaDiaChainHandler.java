package br.com.af.satisfaction.service;

import java.util.Date;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.MovimentacaoConta;
import br.com.af.satisfaction.entidades.bi.ConsolidadoContaDia;

/**
 * Created by filipe on 20/07/16.
 */
public class ConsolidadoContaDiaChainHandler implements MovimentacaoChainHandler {

    private GenericDao<ConsolidadoContaDia> service;

    private GenericDao<Conta> contaService;

    public ConsolidadoContaDiaChainHandler() {
    }

    @Inject
    public ConsolidadoContaDiaChainHandler(GenericDao<ConsolidadoContaDia> service, GenericDao<Conta> contaService) {
        this.service = service;
        this.contaService = contaService;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {

        //Será criado um consolidado dia para movimentacao de conta
        for(MovimentacaoConta conta : movimentacao.getMovimentacoesConta()){
            ConsolidadoContaDia consolidadoDia = new ConsolidadoContaDia();
            consolidadoDia.setData(new Date());
            consolidadoDia.setFilialId(movimentacao.getFilial().getId());
            consolidadoDia.setFilialNome(movimentacao.getFilial().getNome());
            consolidadoDia.setConta(conta.getConta().getNome());
            consolidadoDia.setContaId(conta.getConta().getId());
            consolidadoDia.setContaValor(conta.getValor());

            Conta agrupador = contaService.findAgrupadorConta(conta.getConta().getId());
            if(agrupador != null) {
                consolidadoDia.setAgrupadorContaId(agrupador.getId());
                consolidadoDia.setAgrupadorConta(agrupador.getNome());
            }

            this.service.persist(consolidadoDia);
        }

    }

}
