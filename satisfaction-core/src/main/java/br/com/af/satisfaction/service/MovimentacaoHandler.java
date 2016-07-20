package br.com.af.satisfaction.service;

import java.util.Date;

import javax.inject.Inject;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Movimentacao;
import br.com.af.satisfaction.entidades.Usuario;

/**
 * Created by filipe on 20/07/16.
 */
public class MovimentacaoHandler implements MovimentacaoChainHandler{

    private GenericDao<Movimentacao> service;
    private GenericDao<Usuario> usuarioService;

    public MovimentacaoHandler() {
    }

    @Inject
    public MovimentacaoHandler(GenericDao<Movimentacao> service, GenericDao<Usuario> usuarioService) {
        this.service = service;
        this.usuarioService = usuarioService;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {
        movimentacao.setDataTransacao(new Date());

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = ((User) authentication.getPrincipal()).getUsername();
        Usuario usuario = usuarioService.findByUserName(username);
        movimentacao.setUsuario(usuario);

        this.service.persist(movimentacao);
    }
}
