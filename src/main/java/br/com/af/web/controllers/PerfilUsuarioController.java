package br.com.af.web.controllers;

import static br.com.caelum.vraptor.view.Results.json;

import java.util.List;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.GrupoConta;
import br.com.af.satisfaction.entidades.PerfilUsuario;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.web.dto.ListaDTO;
import br.com.af.web.dto.PerfilUsuarioFormDTO;
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
public class PerfilUsuarioController {

    private Result result;
    private GenericDao<PerfilUsuario> perfilService;
    private GenericDao<GrupoConta> grupoService;
    private GenericDao<Permissao> permissaoService;

    public PerfilUsuarioController() {
    }

    @Inject
    public PerfilUsuarioController(Result result, GenericDao<PerfilUsuario> perfilService, GenericDao<GrupoConta> grupoService, GenericDao<Permissao> permissaoService) {
        this.result = result;
        this.perfilService = perfilService;
        this.grupoService = grupoService;
        this.permissaoService = permissaoService;
    }

    @Get("/perfilusuario/form")
    public void form(){
        List<GrupoConta> grupos = this.grupoService.findAll(GrupoConta.class);
        List<Permissao> permissoes = this.permissaoService.findAll(Permissao.class);
        PerfilUsuarioFormDTO dto = new PerfilUsuarioFormDTO(grupos, permissoes);
        this.result.use(json()).withoutRoot().from(dto).include("grupos", "permissoes").serialize();
    }

    @Get("/perfilusuario/list")
    public void list(){
        List<PerfilUsuario> perfils = this.perfilService.findAll(PerfilUsuario.class);
        ListaDTO<PerfilUsuario> lista = new ListaDTO<>(perfils);
        this.result.use(Results.json()).withoutRoot().from(lista).include("lista").serialize();
    }

    @Consumes("application/json")
    @Post("/perfilusuario/salva")
    public void salva(PerfilUsuario perfilusuario){
        if(perfilusuario.getId()!=null){
            this.perfilService.merge(perfilusuario);
        }else{
            this.perfilService.persist(perfilusuario);
        }
    }
}
