package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Funcionario;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

@Controller
public class FuncionarioController {

	private Result result;
	private GenericDao<Funcionario> funcionarioService;

	public FuncionarioController() {
		// nada
	}

	@Inject
	public FuncionarioController(Result result, GenericDao<Funcionario> funcionarioService) {
		this.result = result;
		this.funcionarioService = funcionarioService;
	}
	
	public void form() {
		//carrega o formulario
	}

	public void list() {
		Paginator<Funcionario> paginator = this.funcionarioService.findPaginator(Funcionario.class, 0);
		this.result.include("paginator", paginator);
	}

	@Path("/funcionario/list/{page}")
	public void goPage(int page){
		Paginator<Funcionario> paginator = this.funcionarioService.findPaginator(Funcionario.class, page);
		this.result.include("paginator", paginator).of(this).list();
	}

	public void salva(Funcionario funcionario) {
		this.funcionarioService.persist(funcionario);
		
		this.result.forwardTo(HomeController.class).home();
	}
}
