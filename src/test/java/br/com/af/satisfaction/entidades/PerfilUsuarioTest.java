package br.com.af.satisfaction.entidades;

import com.google.common.collect.Lists;
import org.junit.Test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * Created by filipe on 19/11/16.
 */
public class PerfilUsuarioTest {

    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("teste");

    private EntityManager em = emf.createEntityManager();

//    @Test
//    public void criarPerfil(){
//
//        Conta conta = new Conta();
//        conta.setNome("conta teste");
//        this.em.persist(conta);
//
//        GrupoConta grupo = new GrupoConta();
//        grupo.setContas(Lists.newArrayList(conta));
//        this.em.persist(grupo);
//
//        PerfilUsuario perfil = new PerfilUsuario();
//        perfil.setNome("teste");
//        perfil.setGrupoConta(grupo);
//        this.em.persist(perfil);
//
//        System.out.println();
//
//    }
}
