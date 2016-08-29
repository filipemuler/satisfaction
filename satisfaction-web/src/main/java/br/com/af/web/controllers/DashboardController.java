package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.entidades.bi.ConsolidadoDia;
import br.com.af.satisfaction.service.ConsolidadoService;
import br.com.af.web.dto.DashboardDTO;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

import java.util.List;

@Controller
public class DashboardController {

	private Result result;
	private ConsolidadoService service;

	public DashboardController() {
		//nada
	}

	@Inject
	public DashboardController(Result result, ConsolidadoService service) {
		this.result = result;
		this.service = service;
	}

	public void form(){}

	@Get("/dashboard/consolidadofinal")
	public void consolidadoFinal(){
		List<ConsolidadoDia> consolidadoDoMes = this.service.getConsolidadoDoMes();
		DashboardDTO dto = new DashboardDTO(consolidadoDoMes);
		this.result.use(Results.json()).withoutRoot().from(dto).include("filiais", "filiais.dados").serialize();
	}
}
