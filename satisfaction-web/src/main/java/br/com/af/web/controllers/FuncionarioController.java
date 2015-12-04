package br.com.af.web.controllers;

import br.com.af.satisfaction.entidades.Funcionario;
import br.com.caelum.vraptor.Controller;

@Controller
public class FuncionarioController {

	public FuncionarioController() {
		// TODO Auto-generated constructor stub
	}
	
	public void form(){
		
	}
	
	public void salva(Funcionario funcionario){
		System.out.println("Salvando funcionario" );
	}
}
