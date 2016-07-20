package br.com.af.satisfaction.service;

import javax.inject.Inject;

import br.com.af.satisfaction.entidades.Movimentacao;

/**
 * Created by filipe on 20/07/16.
 */
public class MovimentacaoService {

    private HandlerProducer handlerProducer;

    public MovimentacaoService() {
    }

    @Inject
    public MovimentacaoService(HandlerProducer handlerProducer) {
        this.handlerProducer = handlerProducer;
    }

    public void criarConsolidados(Movimentacao movimentacao){
        for(MovimentacaoChainHandler handler : handlerProducer.getMovimentacoesHandlers()){
            handler.handleMovimentacao(movimentacao);
        }
    }
}
