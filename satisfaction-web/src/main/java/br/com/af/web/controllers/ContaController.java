package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Filial;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by filipe on 01/02/16.
 */
@Controller
public class ContaController {

    private Result result;
    private GenericDao<Conta> contaService;

    public ContaController() {
        // nada
    }

    @Inject
    public ContaController(Result result, GenericDao<Conta> contaService) {
        this.result = result;
        this.contaService = contaService;
    }

    public void form(){
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    public void salva(Conta conta) {
        System.out.println(conta.getNome());
        System.out.println(conta.getReferenteA());
        this.contaService.salvarConta(conta);

        this.result.forwardTo(ContaController.class).form();
    }
}
