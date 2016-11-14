package br.com.af.web.controllers;

import static br.com.caelum.vraptor.view.Results.json;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.GrupoConta;
import br.com.af.web.dto.ContaFormDTO;
import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;

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

    @Consumes("application/json")
    @Post("/grupoconta/salva")
    public void salva(GrupoConta grupo){
        if(grupo.getId()!=null){
            this.grupoService.merge(grupo);
        }else{
            this.grupoService.persist(grupo);
        }
    }
}
