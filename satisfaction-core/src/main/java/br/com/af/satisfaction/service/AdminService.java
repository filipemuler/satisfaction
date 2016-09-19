package br.com.af.satisfaction.service;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;

/**
 * Created by filipe on 18/09/16.
 */
public class AdminService {

    private GenericDao<Conta> contaService;

    @Inject
    public AdminService(GenericDao<Conta> contaService) {
        this.contaService = contaService;
    }

    public void criarContas(){



    }

    private Conta CriarDespesa(){
        Conta conta = Conta.criarDespesa("Despesa", null, null);

        return null;
    }

    private Conta CriarReceita(){
        return null;
    }

}
