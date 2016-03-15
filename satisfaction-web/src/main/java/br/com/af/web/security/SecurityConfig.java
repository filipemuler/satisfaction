package br.com.af.web.security;

import org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl;
import org.hibernate.engine.jdbc.connections.spi.ConnectionProvider;
import org.hibernate.internal.SessionFactoryImpl;
import org.hibernate.jpa.HibernateEntityManagerFactory;
import org.hibernate.jpa.internal.EntityManagerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

//	@Autowired
//	private EntityManager em;
//	@Autowired
//	private DataSource datasource;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
        http
        .authorizeRequests()
        	.antMatchers("/login/*").permitAll()
        	.anyRequest().authenticated()
        	.and()
        .csrf().disable()
        .formLogin()
            .loginPage("/login/login")
            .defaultSuccessUrl("/login/signup")
            .permitAll();
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/imgs/**", "/bootstrap/**", "/jquery/**");
	}
	
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

//		HibernateEntityManagerFactory factory = ((EntityManagerImpl) this.em).getFactory();
//		ConnectionProvider connectionProvider = ((SessionFactoryImpl) factory.getSessionFactory()).getConnectionProvider();
//		DataSource datasource = ((DatasourceConnectionProviderImpl) connectionProvider).getDataSource();
		auth
            .inMemoryAuthentication()
                .withUser("asd").password("asd").roles("USER");

//					.and().and()
//			.jdbcAuthentication()
//				.dataSource(datasource)
//				.usersByUsernameQuery("select email, senha from Usuario where email=?");

    }

}
