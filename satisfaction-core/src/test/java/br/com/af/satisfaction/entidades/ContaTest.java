package br.com.af.satisfaction.entidades;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.Test;

public class ContaTest {

	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("teste");
	
	private EntityManager em = emf.createEntityManager();
	
//	private GenericDao<Conta> service = new GenericDao<>(em);
	
	@Test
	public void criarContaTest(){
		this.em.getTransaction().begin();
		Conta conta = this.criaConta();
		this.em.persist(conta);
		this.em.getTransaction().commit();
		this.em.clear();
		
		
		System.out.println(conta.getNome());
		System.out.println("filhos-----------------");
		for(Conta c : conta.getContas()){
			System.out.println(c.getNome());
			System.out.println(c.getContaPai());
		}
	}
	
	private Conta criaConta(){
		Conta conta = new Conta();
		conta.setNome("conta1");
		
		Conta filha1 = new Conta();
		filha1.setNome("filha1");
		filha1.setContaPai(conta);
		
		Conta filha2 = new Conta();
		filha2.setNome("filha2");
		filha2.setContaPai(conta);

		conta.getContas().add(filha1);
		conta.getContas().add(filha2);
		
		return conta;
	}
	
}
