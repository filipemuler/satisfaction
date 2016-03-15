package br.com.af.web.controllers;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.config.Paginator;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;

import static org.apache.commons.lang3.math.NumberUtils.toInt;

@Controller
public class UsuarioController {

	
	private Result result;
	private GenericDao<Usuario> usuarioService;
	
	public UsuarioController() {
		// TODO Auto-generated constructor stub
	}
	
	@Inject
	public UsuarioController(Result result, GenericDao<Usuario> usuarioService) {
		this.result = result;
		this.usuarioService = usuarioService;
	}
	
	public void form(){
		//carrega o formulario de cadastro
	}

	@Path({"/usuario/list", "/usuario/list/{page}"})
	public void list(String page) {
		Paginator<Usuario> paginator = this.usuarioService.findPaginator(Usuario.class, toInt(page));
		this.result.include("paginator", paginator);
	}
	
	public void salva(Usuario usuario){
		this.usuarioService.persist(usuario);
		
		this.result.forwardTo(this).list(null);
	}
}
