package br.com.af.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(HttpSecurity http) throws Exception {
        http
        .authorizeRequests()
        	.antMatchers("/login").permitAll()
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
        auth
            .inMemoryAuthentication()
                .withUser("asd").password("asd").roles("USER");
    }
	
}
