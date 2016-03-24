package br.com.af.web.security;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.transaction.Transactional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;

/**
 * Created by filipe on 15/03/16.
 */
@Service("userDetailsService")
@Transactional
public class MyUserDetailsService implements UserDetailsService {

	@PersistenceContext
	private EntityManager em;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Usuario usuario = this.usuarioService.findByUserName(username);
		Usuario user = (Usuario)em.createQuery("select u from Usuario u where u.email = :email").setParameter("email", username).getSingleResult();
		List<GrantedAuthority> authorities = buildUserAuthority(user.getPermissao());
		return this.buildUserForAuthentication(user, authorities);
		
//		return new User(user.getEmail(), user.getSenha(), Lists.newArrayList(new SimpleGrantedAuthority("ROLE_USER")));
	}

	private User buildUserForAuthentication(Usuario user, List<GrantedAuthority> authorities) {
		return new User(user.getEmail(), user.getSenha(), true, true, true, true, authorities);
	}

	private List<GrantedAuthority> buildUserAuthority(List<Permissao> userRoles) {

		List<GrantedAuthority> setAuths = new ArrayList<GrantedAuthority>();

		// Build user's authorities
		for (Permissao userRole : userRoles) {
			setAuths.add(new SimpleGrantedAuthority(userRole.getRotina()));
		}

		List<GrantedAuthority> Result = new ArrayList<GrantedAuthority>(setAuths);

		return Result;
	}
}
