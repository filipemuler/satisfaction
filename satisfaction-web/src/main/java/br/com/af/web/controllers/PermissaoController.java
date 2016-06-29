package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Funcionario;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;

import static br.com.caelum.vraptor.view.Results.json;
import static org.apache.commons.lang3.math.NumberUtils.toInt;

@Controller
public class PermissaoController {
	
	private Result result;
	private GenericDao<Permissao> permissaoService;

	public PermissaoController() {
		// nada
	}

	@Inject
	public PermissaoController(Result result, GenericDao<Permissao> permissaoService) {
		this.result = result;
		this.permissaoService = permissaoService;
	}
	
	public void form() {
		//carrega o formulario
	}

//	@Path({"/permissao/list", "/permissao/list/{page}"})
	public void list(String page) {
		Paginator<Permissao> paginator = this.permissaoService.findPaginator(Permissao.class, toInt(page));
		this.result.use(json()).withoutRoot().from(paginator).
				include("results").serialize();
	}
	
	@Path("/permissao/edita/{permissao.id}")
	public void edita(Permissao permissao){
		Permissao permissaoRecuperada = this.permissaoService.findById(permissao.getId(), Permissao.class);
		this.result.include("permissao", permissaoRecuperada).forwardTo(this).form();
	}
	
	@Path("/permissao/exclui/{permissao.id}")
	public void exclui(Permissao permissao){
		Permissao permissaoRecuperada = this.permissaoService.findById(permissao.getId(), Permissao.class);
		this.permissaoService.remove(permissaoRecuperada);
		this.result.forwardTo(this).list(null);
	}

	@Consumes("application/json")
	@Post("/permissao/salva")
	public void salva(Permissao permissao) {
		if(permissao.getId() != null){
			this.permissaoService.merge(permissao);
		}else{
			this.permissaoService.persist(permissao);
		}

		this.result.forwardTo(this).list(null);
	}
}
