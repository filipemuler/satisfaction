package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.bi.BiConsolidadoFinal;
import br.com.af.web.dto.DashboardDTO;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

import javax.inject.Inject;
import java.util.List;

@Controller
public class DashboardController {

	private Result result;
	private GenericDao<BiConsolidadoFinal> consolidadoFinalService;

	@Inject
	public DashboardController(Result result, GenericDao<BiConsolidadoFinal> consolidadoFinalService) {
		this.result = result;
		this.consolidadoFinalService = consolidadoFinalService;
	}

	public void form(){}

	@Get("/dashboard/consolidadofinal")
	public void consolidadoFinal(){
		List<BiConsolidadoFinal> consolidadoFinals = this.consolidadoFinalService.findAll(BiConsolidadoFinal.class);
		DashboardDTO dto = new DashboardDTO(consolidadoFinals);
		this.result.use(Results.json()).withoutRoot().from(dto).include("filiais", "dados").serialize();
	}
}
