package br.com.af.web.security;

import javax.enterprise.context.SessionScoped;
import javax.enterprise.inject.New;
import javax.enterprise.inject.Produces;
import javax.persistence.EntityManagerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan("br.com.af.web.security.*")
@EnableTransactionManagement
public class JPAConfiguration {

	@Bean
	public LocalContainerEntityManagerFactoryBean emf() {
		LocalContainerEntityManagerFactoryBean managerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		managerFactoryBean.setPersistenceUnitName("default");
		return managerFactoryBean;
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(emf);

		return transactionManager;
	}
	
	@Bean
	@Produces
	public PasswordEncoder passwordEncoder() {
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}


}
