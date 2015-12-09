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
	}

	@Inject
	public FuncionarioController(GenericDao<Funcionario> funcionarioService, Result result) {
		this.funcionarioService = funcionarioService;
		this.result = result;
	}

	public void form() {

	}

	public void salva(Funcionario funcionario) {
		System.out.println("Salvando funcionario");
		this.funcionarioService.persist(funcionario);
		
		this.result.forwardTo(HomeController.class).home();
	}
}
