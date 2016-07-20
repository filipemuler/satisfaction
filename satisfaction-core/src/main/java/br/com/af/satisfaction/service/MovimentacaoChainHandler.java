package br.com.af.satisfaction.service;

import br.com.af.satisfaction.entidades.Movimentacao;

/**
 * Created by filipe on 20/07/16.
 */
public interface MovimentacaoChainHandler {

    void handleMovimentacao(Movimentacao movimentacao);
}
