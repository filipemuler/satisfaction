package br.com.af.web.init;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Permissao;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;
import javax.servlet.ServletContext;

/**
 * Created by filipe on 14/03/16.
 */
@ApplicationScoped
public class ApplicationInitializer {

    @Inject
    private GenericDao<Permissao> permissaoService;

    public void onStartup(@Observes @Initialized ServletContext ctx) {
        System.out.println("Initialized web application at context path " + ctx.getContextPath());

        if(!this.permissaoService.findUserRole()){
            Permissao permissao = new Permissao("ROLE_USER", "Usuario generico");
            this.permissaoService.persist(permissao);
        }

    }
}
