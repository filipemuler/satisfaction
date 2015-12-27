package br.com.af.web.controllers;

import javax.inject.Inject;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Funcionario;
import br.com.af.satisfaction.entidades.Usuario;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Result;

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
	
	public void salva(Usuario usuario){
		this.usuarioService.persist(usuario);
		
		this.result.forwardTo(HomeController.class).home();
	}
}
