package br.com.af.web.controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import br.com.caelum.vraptor.Controller;

@Controller
public class LoginController {

	@GET
	@Path("/login")
	public void login() {
		System.out.println("blabla");
	}

}
