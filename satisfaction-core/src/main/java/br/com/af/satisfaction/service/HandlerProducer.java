package br.com.af.satisfaction.service;

import java.util.List;
import java.util.Set;

import javax.enterprise.inject.Produces;
import javax.inject.Inject;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;

/**
 * Created by filipe on 20/07/16.
 */
public class HandlerProducer {

    private MovimentacaoHandler movimentacao;
    private ConsolidadoTotalChainHandler consolidadoTotal;
    private ConsolidadoFinalChainHandler consolidadoFinal;

    public HandlerProducer() {
    }

    @Inject
    public HandlerProducer(MovimentacaoHandler movimentacao, ConsolidadoTotalChainHandler consolidadoTotal, ConsolidadoFinalChainHandler consolidadoFinal) {
        this.movimentacao = movimentacao;
        this.consolidadoTotal = consolidadoTotal;
        this.consolidadoFinal = consolidadoFinal;
    }

    @Produces
    public Set<MovimentacaoChainHandler> getMovimentacoesHandlers(){
        Set<MovimentacaoChainHandler> handlers = Sets.newHashSet();
        handlers.add(this.movimentacao);
        handlers.add(this.consolidadoFinal);
        handlers.add(this.consolidadoTotal);
        return handlers;
    }
}
