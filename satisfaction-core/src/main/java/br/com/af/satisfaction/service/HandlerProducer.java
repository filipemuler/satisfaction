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
    private ConsolidadoMesChainHandler mes;
    private ConsolidadoContaDiaChainHandler contaDia;
    private ConsolidadoFluxoDiaChainHandler fluxoDia;

    public HandlerProducer() {
    }

    @Inject
    public HandlerProducer(MovimentacaoHandler movimentacao, ConsolidadoMesChainHandler mes, ConsolidadoContaDiaChainHandler contaDia, ConsolidadoFluxoDiaChainHandler fluxoDia) {
        this.movimentacao = movimentacao;
        this.mes = mes;
        this.contaDia = contaDia;
        this.fluxoDia = fluxoDia;
    }

    @Produces
    public Set<MovimentacaoChainHandler> getMovimentacoesHandlers(){
        Set<MovimentacaoChainHandler> handlers = Sets.newHashSet();
        handlers.add(this.movimentacao);
        handlers.add(this.mes);
        handlers.add(this.contaDia);
        handlers.add(this.fluxoDia);
        return handlers;
    }
}
