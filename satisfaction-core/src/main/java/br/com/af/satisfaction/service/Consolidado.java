package br.com.af.satisfaction.service;

import java.util.List;

import com.google.common.collect.Lists;

/**
 * Created by filipe on 15/07/16.
 */
public class Consolidado {

    private List<Acao> acoes = Lists.newArrayList();

    public Consolidado(){
        acoes.add(new ConsolidadoFinalAcao());
        acoes.add(new ConsolidadoTotalAcao());
    }

    public void criarConsolidados(){
        for(Acao acao : this.acoes){
            acao.criaConsolidado();
        }
    }
}
