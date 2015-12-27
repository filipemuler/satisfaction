package br.com.af.satisfaction.config;

import java.util.List;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.criterion.MatchMode;
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

}
