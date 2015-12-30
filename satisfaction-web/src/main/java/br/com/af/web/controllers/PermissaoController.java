package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Result;

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
	
	public void salva(Permissao permissao) {
		this.permissaoService.persist(permissao);
		
		this.result.forwardTo(HomeController.class).home();
	}
}
