package br.com.af.satisfaction.service;

import javax.enterprise.inject.Produces;

/**
 * Created by filipe on 15/07/16.
 */
public class ConsolidadoService {

    public Consolidado criaConsolidado(){
        return new Consolidado();
    }
}
