package br.com.af.web.controllers;

import static com.google.common.collect.FluentIterable.from;

import java.util.List;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.Fluxo;
import br.com.af.satisfaction.service.MovimentacaoService;
import br.com.af.web.dto.MovimentadaoDTO;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Movimentacao;
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
    private GenericDao<Filial> filialService;
    private MovimentacaoService movimentacaoService;
    private GenericDao<Fluxo> fluxoService;

    public MovimentacaoController() {
        // nada
    }

    @Inject
    public MovimentacaoController(Result result, GenericDao<Conta> contaService, GenericDao<Filial> filialService,
                                  MovimentacaoService movimentacaoService, GenericDao<Fluxo> fluxoService) {
        this.result = result;
        this.contaService = contaService;
        this.filialService = filialService;
        this.movimentacaoService = movimentacaoService;
        this.fluxoService = fluxoService;
    }

    public void form() {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    @Path("/movimentacao/list/contas")
    public void listaContas() {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        List<Filial> filiais = this.filialService.findAll(Filial.class);
        List<Fluxo> fluxos = this.fluxoService.findAll(Fluxo.class);
        MovimentadaoDTO movimentadaoDTO = new MovimentadaoDTO(contas, filiais, fluxos);
        this.result.use(Results.json()).withoutRoot().
                from(movimentadaoDTO).include("grupos", "receitasFixas", "filiais",
                "despesas", "recebimentos", "cartoesEntrada", "cartoesSaida", "fluxos").serialize();

    }

    @Consumes("application/json")
    @Post("/movimentacao/salvar")
    public void salvar(Movimentacao movimentacao) {
        this.movimentacaoService.criarMovimentacoes(movimentacao);
    }

}
