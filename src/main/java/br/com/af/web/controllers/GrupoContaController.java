package br.com.af.web.controllers;

import static br.com.caelum.vraptor.view.Results.json;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.GrupoConta;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.af.web.dto.ContaFormDTO;
import br.com.af.web.dto.ListaDTO;
import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

/**
 * Created by filipe on 14/11/16.
 */
@Controller
public class GrupoContaController {

    private Result result;
    private GenericDao<GrupoConta> grupoService;
    private GenericDao<Conta> contaService;

    public GrupoContaController() {
    }

    @Inject
    public GrupoContaController(Result result, GenericDao<GrupoConta> grupoService, GenericDao<Conta> contaService) {
        this.result = result;
        this.grupoService = grupoService;
        this.contaService = contaService;
    }

    @Get("/grupoconta/form")
    public void form(){
        List<Conta> contas = this.contaService.findAll(Conta.class);
        ContaFormDTO dto = new ContaFormDTO(contas, new ArrayList<>());
        this.result.use(json()).withoutRoot().from(dto).recursive().serialize();
    }

    @Get("/grupoconta/list")
    public void list(String page) {
        List<GrupoConta> grupos = this.grupoService.findAll(GrupoConta.class);
        ListaDTO<GrupoConta> lista = new ListaDTO<>(grupos);
        this.result.use(Results.json()).withoutRoot().from(lista).include("lista").serialize();
    }

    @Consumes("application/json")
    @Post("/grupoconta/salva")
    public void salva(GrupoConta grupoconta){
        if(grupoconta.getId()!=null){
            this.grupoService.merge(grupoconta);
        }else{
            this.grupoService.persist(grupoconta);
        }
    }
}
