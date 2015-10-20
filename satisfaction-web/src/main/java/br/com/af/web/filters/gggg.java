package br.com.af.web.filters;

import br.com.af.satisfaction.entidades.Funcionario;

public class gggg {

	
	public static void main(String[] args) {
		
	}
	
	
	public static void  persist(){
		
		EntityManager em = new EntityManager();
		
		Funcionario f = new Funcionario();
		f.setCpf("3333333333");
		f.setNome("Oik adfsdf sdfsdf");
		
		em.persist(f);
	}
	
}
