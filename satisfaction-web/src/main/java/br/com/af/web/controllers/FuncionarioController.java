package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Filial;
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
	
	@Path("/funcionario/edita/{funcionario.id}")
	public void edita(Funcionario funcionario){
		Funcionario funcionarioRecuperado = this.funcionarioService.findById(funcionario.getId(), Funcionario.class);
		this.result.include("funcionario", funcionarioRecuperado).forwardTo(this).form();
	}
	
	@Path("/funcionario/exclui/{funcionario.id}")
	public void exclui(Funcionario funcionario){
		Funcionario funcionarioRecuperado = this.funcionarioService.findById(funcionario.getId(), Funcionario.class);
		this.funcionarioService.remove(funcionarioRecuperado);
		this.result.forwardTo(this).list(null);
	}

	public void salva(Funcionario funcionario) {
		if(funcionario.getId()!=null){
			this.funcionarioService.merge(funcionario);
		}else{
			this.funcionarioService.persist(funcionario);	
		}
		
		this.result.redirectTo(this).list(null);
	}
}
