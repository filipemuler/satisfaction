package br.com.af.satisfaction.service;

import java.util.Set;

import javax.enterprise.inject.Produces;
import javax.inject.Inject;

import com.google.common.collect.Sets;

/**
 * Created by filipe on 20/07/16.
 */
public class HandlerProducer {

    private MovimentacaoHandler movimentacao;
    private ConsolidadoMesChainHandler consolidadoTotal;
    private ConsolidadoDiaChainHandler consolidadoFinal;

    public HandlerProducer() {
    }

    @Inject
    public HandlerProducer(MovimentacaoHandler movimentacao, ConsolidadoMesChainHandler consolidadoTotal, ConsolidadoDiaChainHandler consolidadoFinal) {
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
