package br.com.af.web.init;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Turno;
import br.com.caelum.vraptor.events.VRaptorInitialized;

import javax.enterprise.event.Observes;
import javax.inject.Inject;

/**
 * Created by filipe on 15/09/16.
 */
public class StartUpObserver {

    private GenericDao<Conta> contaService;

    @Inject
    public StartUpObserver(GenericDao<Conta> contaService) {
        this.contaService = contaService;
    }

    public void init(@Observes VRaptorInitialized evento){
        System.out.println("====================");
        System.out.println(this.contaService);
        Conta conta = new Conta();
        conta.setNome("Conta Bizarra");
        conta.setTurno(Turno.MANHA);
        contaService.persist(conta);

    }
}
