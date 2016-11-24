package br.com.af.web.controllers;

import br.com.af.satisfaction.entidades.Usuario;
import br.com.af.satisfaction.service.UsuarioService;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;

import javax.inject.Inject;

@Controller
public class HomeController {

	private Result result;
	private UsuarioService usuarioService;

	public HomeController() {
	}

	@Inject
	public HomeController(Result result) {
		this.result = result;
	}

	@Path("/")
	public void home(){}

	@Get("/home/usuario")
	public void getUsuario(){
		Usuario usuarioLogado = this.usuarioService.getUsuarioLogado();

	}
}
