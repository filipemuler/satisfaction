package br.com.af.web.security;

import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;
import com.google.common.collect.Lists;
import javafx.util.converter.LocalTimeStringConverter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.FormatStyle;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

		Usuario user = (Usuario) em.createQuery("select u from Usuario u where u.email = :email")
				.setParameter("email", username).getSingleResult();

		List<GrantedAuthority> authorities = Lists.newArrayList();
		if(user.getPerfil() != null){

			if(!user.isAdmin()) {
				//FIXME essa validação tem q estar em outro lugar, talvez no AccessDecisionManager
				String horaAcesso = user.getPerfil().getHoraAcesso();
				Integer intervalo = user.getPerfil().getIntervaloAcesso();
				LocalTimeStringConverter sc = new LocalTimeStringConverter(FormatStyle.SHORT);
				LocalTime lt = LocalTime.now();
				LocalTime hora = sc.fromString(horaAcesso);
				LocalTime horadepois = hora.plusMinutes(intervalo);
				boolean b = lt.isAfter(hora) && lt.isBefore(horadepois);
				if (!b) throw new UsernameNotFoundException("bla");
			}

			authorities.addAll(buildUserAuthority(user.getPerfil().getPermissoes()));
		}

		return this.buildUserForAuthentication(user, authorities);
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


	public static void main(String[] args) {
		LocalTime lt = LocalTime.now();
		String horaAcesso = "00:00";
		Integer intervalo = 30;
		LocalTimeStringConverter sc = new LocalTimeStringConverter(FormatStyle.SHORT);
		LocalTime hora = sc.fromString(horaAcesso);
		LocalTime horadepois = hora.plusMinutes(intervalo);
		boolean b = lt.isAfter(hora) && lt.isBefore(horadepois);
		System.out.println(b);
	}
}
