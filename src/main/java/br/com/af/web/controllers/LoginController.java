package br.com.af.web.controllers;

import javax.inject.Inject;
import javax.ws.rs.GET;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Result;

@Controller
public class LoginController {

	private Result result;
	
	public LoginController() {
	}
	
	@Inject
	public LoginController(Result result) {
		super();
		this.result = result;
	}

	@GET
	public void login() {
	}

	public void signup(){
		result.redirectTo(HomeController.class).home();
	}
}
