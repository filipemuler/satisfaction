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
    private UsuarioService usuarioService;

    public MovimentacaoHandler() {
    }

    @Inject
    public MovimentacaoHandler(GenericDao<Movimentacao> service, UsuarioService usuarioService) {
        this.service = service;
        this.usuarioService = usuarioService;
    }

    @Override
    public void handleMovimentacao(Movimentacao movimentacao) {
        movimentacao.setDataTransacao(new Date());
        movimentacao.setUsuario(usuarioService.getUsuarioLogado());

        this.service.persist(movimentacao);
    }
}
