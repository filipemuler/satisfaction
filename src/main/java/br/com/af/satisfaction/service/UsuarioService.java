package br.com.af.satisfaction.service;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Usuario;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import javax.inject.Inject;

/**
 * Created by filipe on 02/10/16.
 */
public class UsuarioService {

    private GenericDao<Usuario> service;

    @Inject
    public UsuarioService(GenericDao<Usuario> service) {
        this.service = service;
    }

    public Usuario getUsuarioLogado(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = ((User) authentication.getPrincipal()).getUsername();
        Usuario usuario = service.findByUserName(username);
        return usuario;
    }

}
