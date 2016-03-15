package br.com.af.web.security;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.inject.Inject;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;

/**
 * Created by filipe on 15/03/16.
 */
@Service("userDetailsService")
public class MyUserDetailsService implements UserDetailsService {

    @Inject
    private GenericDao<Usuario> usuarioService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = this.usuarioService.findByUserName(username);
        List<GrantedAuthority> authorities = buildUserAuthority(usuario.getPermissao());
        return this.buildUserForAuthentication(usuario, authorities );
    }

    // Converts com.mkyong.users.model.User user to
    // org.springframework.security.core.userdetails.User
    private User buildUserForAuthentication(Usuario user,
                                            List<GrantedAuthority> authorities) {
        return new User(user.getEmail(), user.getSenha(),
                true, true, true, true, authorities);
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
