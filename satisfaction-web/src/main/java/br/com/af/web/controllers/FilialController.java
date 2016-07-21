package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.TipoLogradouro;
import br.com.af.web.dto.SelectOptionDTO;
import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

import javax.inject.Inject;

import static br.com.caelum.vraptor.view.Results.json;
import static com.google.common.collect.FluentIterable.from;
import static org.apache.commons.lang3.math.NumberUtils.toInt;

import java.util.List;
import java.util.ResourceBundle;

import com.google.common.collect.Lists;

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

	@Get("/filial/tipoLogradouro")
	public void getTiposLogradouros(){
		ResourceBundle bundle = ResourceBundle.getBundle("messages");
		List<SelectOptionDTO> select = Lists.newArrayList();
		for(TipoLogradouro tipo : TipoLogradouro.values()){
			String value = tipo.name();
			String label = bundle.getString(TipoLogradouro.class.getSimpleName() + "." + tipo.name());
			select.add(new SelectOptionDTO(value, null, label));
		}
		this.result.use(json()).withoutRoot().from(select).serialize();
	}

	@Path({"/filial/list", "/filial/list/{page}"})
	public void list(String page) {
		Paginator<Filial> paginator = this.filialService.findPaginator(Filial.class, toInt(page));
		this.result.use(json()).withoutRoot().from(paginator).include("results").serialize();

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

	@Consumes("application/json")
	public void salva(Filial filial) {
		if(filial.getId() != null){
			this.filialService.merge(filial);
		}else{
			this.filialService.persist(filial);	
		}
		
		this.result.forwardTo(this).list(null);
	}
}
