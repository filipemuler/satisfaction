package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Filial;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;
import java.util.List;

@Controller
public class DashboardController {

	private Result result;
	private GenericDao<Filial> filialService;

	@Inject
	public DashboardController(Result result, GenericDao<Filial> filialService) {
		this.result = result;
		this.filialService = filialService;
	}

	public void form(){}

	@Get("/dashboard/consolidadofinal")
	public void consolidadoFinal(){
		List<Filial> filiais = this.filialService.findAll(Filial.class);

	}
}
