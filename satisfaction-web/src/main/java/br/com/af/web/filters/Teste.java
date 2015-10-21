package br.com.af.web.filters;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import br.com.caelum.vraptor.Controller;

@Controller
public class Teste {

	@GET
	@Path("/login")
	public void login() {
		System.out.println("blabla");
	}

}
