package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;
import java.util.List;

/**
 * Created by filipe on 01/02/16.
 */
@Controller
public class MovimentacaoController {

    private Result result;
    private GenericDao<Conta> contaService;
    private GenericDao<Movimentacao> movimentacaoService;

    public MovimentacaoController() {
        // nada
    }

    @Inject
    public MovimentacaoController(Result result, GenericDao<Conta> contaService,
                                  GenericDao<Movimentacao> movimentacaoService) {
        this.result = result;
        this.contaService = contaService;
        this.movimentacaoService = movimentacaoService;
    }

    public void form(){
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    public void salva(Movimentacao movimentacao) {
        this.movimentacaoService.persist(movimentacao);

        this.result.forwardTo(MovimentacaoController.class).form();
    }
}
