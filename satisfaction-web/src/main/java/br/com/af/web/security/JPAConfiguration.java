package br.com.af.web.security;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceUnit;

import org.springframework.context.annotation.Bean;

public class JPAConfiguration {

//	@PersistenceUnit(unitName = "default")
//	private EntityManagerFactory entityManagerFactory;
	
	@Bean
	public EntityManagerFactory emf() throws NamingException {
//		Context ctx = new InitialContext();
//		EntityManagerFactory lookup = (EntityManagerFactory) ctx.lookup("java:comp/env");
//		return lookup;
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
		return emf;
	}

}
