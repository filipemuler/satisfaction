package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.TipoLogradouro;
import br.com.af.satisfaction.entidades.Usuario;
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
	
	@Path("/filial/edita/{filial.id}")
	public void edita(Filial filial){
		Filial filialRecuperada = this.filialService.findById(filial.getId(), Filial.class);
		this.result.include("filial", filialRecuperada).forwardTo(this).form();
	}
	
	@Path("/filial/exclui/{filial.id}")
	public void exclui(Filial filial){
		Filial filialRecuperada = this.filialService.findById(filial.getId(), Filial.class);
		this.filialService.remove(filialRecuperada);
		this.result.forwardTo(this).list(null);
	}

	public void salva(Filial filial) {
		if(filial.getId() != null){
			this.filialService.merge(filial);
		}else{
			this.filialService.persist(filial);	
		}
		
		this.result.forwardTo(this).list(null);
	}
}
