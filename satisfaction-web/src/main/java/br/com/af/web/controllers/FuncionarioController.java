package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Funcionario;
import br.com.caelum.vraptor.Controller;
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

	public void salva(Funcionario funcionario) {
		this.funcionarioService.persist(funcionario);
		
		this.result.forwardTo(HomeController.class).home();
	}
}
