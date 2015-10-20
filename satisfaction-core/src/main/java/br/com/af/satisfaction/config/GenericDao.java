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

	@Inject
    private EntityManager em;
    
//    public GenericDao(){
//	this(null);
//    }

//    @Inject
//    public GenericDao(EntityManager em) {
//	this.em = em;
//    }

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
	List<T> list = session.createCriteria(klass)
		.add(Restrictions.ilike("nome", nome, MatchMode.START)).list();
	return list;
    }



    public T findById(Long id, Class klass) {
	Session session = (Session) this.em.getDelegate();
	T paciente = (T) session.createCriteria(klass)
		.add(Restrictions.eq("id", id)).uniqueResult();
	return paciente;
    }




}
