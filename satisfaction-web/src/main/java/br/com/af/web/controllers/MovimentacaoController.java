package br.com.af.web.controllers;

import static com.google.common.collect.FluentIterable.from;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.dto.MovimentadaoDTO;
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
    private GenericDao<Movimentacao> movimentacaoService;
    private GenericDao<Usuario> usuarioService;

    public MovimentacaoController() {
        // nada
    }

    @Inject
    public MovimentacaoController(Result result, GenericDao<Conta> contaService,
                                  GenericDao<Movimentacao> movimentacaoService, GenericDao<Usuario> usuarioService) {
        this.result = result;
        this.contaService = contaService;
        this.movimentacaoService = movimentacaoService;
        this.usuarioService = usuarioService;
    }

    public void form() {
        List<Conta> contas = this.contaService.findAll(Conta.class);
        this.result.include("contas", contas);
    }

    @Path("/movimentacao/list/contas")
    public void listaContas() {
        MovimentadaoDTO movimentadaoDTO = this.contaService.findConta();
        this.result.use(Results.json()).withoutRoot().
                from(movimentadaoDTO).include("contas", "grupos", "contasOrdem").serialize();

    }

    @Consumes("application/json")
    @Post("/movimentacao/salvar")
    public void salvar(Movimentacao movimentacao) {
        movimentacao.setDataTransacao(new Date());

        //TODO: fazer um servico pra isso aqui
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = ((User) authentication.getPrincipal()).getUsername();
        Usuario usuario = usuarioService.findByUserName(username);
        movimentacao.setUsuario(usuario);

        this.movimentacaoService.persist(movimentacao);
    }

}
