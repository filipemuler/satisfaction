package br.com.af.web.controllers;

import br.com.af.satisfaction.entidades.Usuario;
import br.com.af.satisfaction.service.UsuarioService;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.view.Results;

import javax.inject.Inject;

@Controller
public class HomeController {

	private Result result;
	private UsuarioService usuarioService;

	public HomeController() {
	}

	@Inject
	public HomeController(Result result, UsuarioService usuarioService) {
		this.result = result;
		this.usuarioService = usuarioService;
	}

	@Path("/")
	public void home(){}

	@Get("/home/usuario")
	public void getUsuario(){
		Usuario usuarioLogado = this.usuarioService.getUsuarioLogado();
		AdminDTO adminDTO = new AdminDTO(usuarioLogado.isAdmin());
		this.result.use(Results.json()).withoutRoot().from(adminDTO).recursive().serialize();
	}

	public class AdminDTO {
		private boolean admin;

		public AdminDTO(boolean admin) {
			this.admin = admin;
		}

		public boolean isAdmin() {
			return admin;
		}

		public void setAdmin(boolean admin) {
			this.admin = admin;
		}
	}
}
