package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.TipoLogradouro;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Result;

@Controller
public class FilialController {
	
	private Result result;
	private GenericDao<Filial> filialService;

	public FilialController() {
		// nada
	}

	@Inject
	public FilialController(Result result, GenericDao<Filial> filialService) {
		this.result = result;
		this.filialService = filialService;
	}
	
	public void form() {
		//carrega o formulario
		//adicionando os tipos de logradouros
		this.result.include("tiposLogradouros", TipoLogradouro.values());
	}
	
	public void salva(Filial filial) {
		this.filialService.persist(filial);
		
		this.result.forwardTo(HomeController.class).home();
	}
}
