package br.com.af.web.controllers;

import static com.google.common.collect.FluentIterable.from;

import java.math.BigDecimal;
import java.util.List;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.*;
import br.com.af.satisfaction.service.ConsolidadoService;
import br.com.af.satisfaction.service.MovimentacaoService;
import br.com.af.satisfaction.service.UsuarioService;
import br.com.af.web.dto.MovimentadaoDTO;
import br.com.af.web.dto.SaldoAnteriorDTO;
import br.com.caelum.vraptor.*;
import br.com.caelum.vraptor.view.Results;
import com.google.common.collect.Lists;

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
    private UsuarioService usuarioService;
    private ConsolidadoService consolidadoService;

    public MovimentacaoController() {
        // nada
    }

    @Inject
    public MovimentacaoController(Result result, GenericDao<Conta> contaService, GenericDao<Filial> filialService,
                                  MovimentacaoService movimentacaoService, GenericDao<Fluxo> fluxoService, UsuarioService usuarioService, ConsolidadoService consolidadoService) {
        this.result = result;
        this.contaService = contaService;
        this.filialService = filialService;
        this.movimentacaoService = movimentacaoService;
        this.fluxoService = fluxoService;
        this.usuarioService = usuarioService;
        this.consolidadoService = consolidadoService;
    }

    public void form() {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    @Path("/movimentacao/list/contas")
    public void listaContas() {
        Usuario usuarioLogado = this.usuarioService.getUsuarioLogado();
        MovimentadaoDTO movimentadaoDTO = null;
        if(!usuarioLogado.isAdmin()){
            List<Conta> contas = usuarioLogado.getPerfil().getGrupoConta().getContas();
            movimentadaoDTO = new MovimentadaoDTO(contas, Lists.newArrayList(), Lists.newArrayList(), usuarioLogado);
        }else {
            List<Conta> contas = this.contaService.findAll(Conta.class);
            List<Filial> filiais = this.filialService.findAll(Filial.class);
            List<Fluxo> fluxos = this.fluxoService.findAll(Fluxo.class);
            Usuario usuario = usuarioService.getUsuarioLogado();
            movimentadaoDTO = new MovimentadaoDTO(contas, filiais, fluxos, usuario);
        }
        this.result.use(Results.json()).withoutRoot().from(movimentadaoDTO)
                .include("receitasFixas", "despesas", "recebimentos", "filiais", "fluxos", "usuario", "filial")
                .serialize();
    }

    @Get("/movimentacao/saldos/{filialId}")
    public void getSaldos(Long filialId){
        BigDecimal saldoAnterior = this.consolidadoService.getSaldoAnterior(filialId);
        SaldoAnteriorDTO dto = new SaldoAnteriorDTO(saldoAnterior);
        this.result.use(Results.json()).withoutRoot().from(dto).serialize();

    }

    @Consumes("application/json")
    @Post("/movimentacao/salvar")
    public void salvar(Movimentacao movimentacao) {
        this.movimentacaoService.criarMovimentacoes(movimentacao);
        this.result.nothing();
    }

}
