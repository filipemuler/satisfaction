package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Funcionario;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;

import static org.apache.commons.lang3.math.NumberUtils.toInt;

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

	@Path({"/funcionario/list", "/funcionario/list/{page}"})
	public void list(String page) {
		Paginator<Funcionario> paginator = this.funcionarioService.findPaginator(Funcionario.class, toInt(page));
		this.result.include("paginator", paginator);
	}

	public void salva(Funcionario funcionario) {
		this.funcionarioService.persist(funcionario);
		
		this.result.redirectTo(this).list(null);
	}
}
