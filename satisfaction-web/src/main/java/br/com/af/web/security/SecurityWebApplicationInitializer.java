package br.com.af.web.security;

import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

public class SecurityWebApplicationInitializer extends AbstractSecurityWebApplicationInitializer {

	public SecurityWebApplicationInitializer() {
		super(SecurityConfig.class, MyUserDetailsService.class, JPAConfiguration.class);
	}
}
