package br.com.af.web.controllers;

import static com.google.common.collect.FluentIterable.from;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.service.MovimentacaoService;
import br.com.af.web.dto.MovimentadaoDTO;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

/**
 * Created by filipe on 01/02/16.
 */
@Controller
public class MovimentacaoController {

    private Result result;
    private GenericDao<Conta> contaService;
    private MovimentacaoService movimentacaoService;

    public MovimentacaoController() {
        // nada
    }

    @Inject
    public MovimentacaoController(Result result, GenericDao<Conta> contaService, MovimentacaoService movimentacaoService) {
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
        List<Conta> contas = this.contaService.findAll(Conta.class);
        MovimentadaoDTO movimentadaoDTO = new MovimentadaoDTO(contas);
        this.result.use(Results.json()).withoutRoot().
                from(movimentadaoDTO).include("contas", "grupos", "receitasFixas").serialize();

    }

    @Consumes("application/json")
    @Post("/movimentacao/salvar")
    public void salvar(Movimentacao movimentacao) {
        this.movimentacaoService.criarConsolidados(movimentacao);
        System.out.println(movimentacao.getId());

    }

}
