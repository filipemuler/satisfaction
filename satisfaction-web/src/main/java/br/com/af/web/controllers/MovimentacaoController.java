package br.com.af.web.controllers;

import static com.google.common.collect.FluentIterable.from;

import java.util.List;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.dto.MovimentadaoDTO;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

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

    public void form() {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    @Path("/movimentacao/list/contas")
    public void listaContas() {
        MovimentadaoDTO movimentadaoDTO = this.contaService.findConta();
        this.result.use(Results.json()).withoutRoot().from(movimentadaoDTO).include("contas", "grupos").serialize();

    }

    @Path("/movimentacao/salvar")
    public void salvar(Movimentacao movimentacao) {
        this.movimentacaoService.persist(movimentacao);
    }

}
