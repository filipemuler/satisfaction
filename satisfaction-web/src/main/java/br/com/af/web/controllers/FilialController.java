package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.TipoLogradouro;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;

import static org.apache.commons.lang3.math.NumberUtils.toInt;

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

	@Path({"/filial/list", "/filial/list/{page}"})
	public void list(String page) {
		Paginator<Filial> paginator = this.filialService.findPaginator(Filial.class, toInt(page));
		this.result.include("paginator", paginator);
	}

	public void salva(Filial filial) {
		this.filialService.persist(filial);
		
		this.result.forwardTo(this).list(null);
	}
}
