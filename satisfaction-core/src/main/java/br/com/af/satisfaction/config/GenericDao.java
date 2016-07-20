package br.com.af.satisfaction.config;

import java.util.List;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Permissao;
import br.com.af.satisfaction.entidades.Usuario;

@Dependent
public class GenericDao<T> {

	private EntityManager em;

	public GenericDao() {
		this(null);
	}

	@Inject
	public GenericDao(EntityManager em) {
		this.em = em;
	}

	public void persist(T entity) {
		this.em.persist(entity);
		this.em.flush();
	}

	public T merge(T entity) {
		return this.em.merge(entity);
	}

	public void remove(T entity) {
		this.em.remove(entity);
	}

	public List<T> findAll(Class klass) {
		Session session = (Session) this.em.getDelegate();
		List<T> list = session.createCriteria(klass).list();
		return list;
	}

	public List<T> findByNome(String nome, Class klass) {
		Session session = (Session) this.em.getDelegate();
		List<T> list = session.createCriteria(klass).add(Restrictions.ilike("nome", nome, MatchMode.START)).list();
		return list;
	}


	public Usuario findByUserName(String username){
		Session session = (Session) this.em.getDelegate();
		Usuario result = (Usuario) session.createCriteria(Usuario.class).add(Restrictions.eq("email", username)).uniqueResult();
		return result;
	}

	public boolean findUserRole(){
		Session session = (Session) this.em.getDelegate();
		Permissao result = (Permissao) session.createCriteria(Permissao.class).add(Restrictions.eq("rotina", "ROLE_USER")).uniqueResult();
		if(result == null) return false;
		return true;
	}

	public T findById(Long id, Class klass) {
		Session session = (Session) this.em.getDelegate();
		T paciente = (T) session.createCriteria(klass).add(Restrictions.eq("id", id)).uniqueResult();
		return paciente;
	}

	public Paginator<T> findPaginator(Class klass, int firstResult){
		Session session = (Session) this.em.getDelegate();
		Criteria criteria = session.createCriteria(klass);
		criteria.setFirstResult(firstResult*10);
		criteria.setMaxResults(10);
		List<T> list = criteria.list();
		//Total count
		Criteria criteriaCount = session.createCriteria(klass);
		criteriaCount.setProjection(Projections.rowCount());
		Long count = (Long) criteriaCount.uniqueResult();
		return new Paginator<>(count, list, Math.floorDiv(count-1, 10));
	}

	public void salvarConta(Conta conta){
		if(conta.getReferenteA() != null && conta.getReferenteA().getId() != null) {
			Conta pai = this.em.find(Conta.class, conta.getReferenteA().getId());
			conta.getContas().add(pai);
		}
		this.em.persist(conta);

	}


}
