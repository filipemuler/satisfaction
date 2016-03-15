package br.com.af.satisfaction.config;

import java.util.List;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.swing.*;

import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Permissao;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

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

	public boolean findUserRole(){
		Session session = (Session) this.em.getDelegate();
		Permissao result = (Permissao) session.createCriteria(Permissao.class).add(Restrictions.eq("rotina", "ROLE_USER")).uniqueResult();
		if(result == null) return false;
		return true;
	}

	// public List<Autocomplete> autoCompletePaciente(String nome) {
	// Session session = (Session) this.em.getDelegate();
	// List<Autocomplete> list = session
	// .createCriteria(Paciente.class)
	// .setProjection(
	// Projections.projectionList()
	// .add(Projections.property("id"), "value")
	// .add(Projections.property("nome"), "label"))
	// .add(Restrictions.ilike("nome", nome, MatchMode.START))
	// .setResultTransformer(
	// Transformers.aliasToBean(Autocomplete.class)).list();
	// return list;
	// }

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

//	public List<Event> findEvents(long start, long end) {
//		Session session = (Session) this.em.getDelegate();
//
//		Date dateStart = new LocalDate().withDayOfMonth(1).toDate();
//		Date dateEnd = new LocalDate().withPeriodAdded(Period.months(1), 1).toDate();
//
//		List<Event> list = session.createCriteria(Consulta.class, "consulta").createCriteria("paciente", "paciente")
//				.setProjection(Projections.projectionList().add(Projections.property("consulta.id"), "id")
//						.add(Projections.property("paciente.nome"), "title")
//						.add(Projections.property("consulta.dataStart"), "start")
//						.add(Projections.property("consulta.dataEnd"), "end"))
//				.add(Restrictions.ge("consulta.dataStart", dateStart))
//				.add(Restrictions.le("consulta.dataStart", dateEnd))
//				.setResultTransformer(Transformers.aliasToBean(Event.class)).list();
//		return list;
//	}


	public static void main(String[] args) {
		System.out.println(Math.floorDiv(11-1, 10));
	}
}
