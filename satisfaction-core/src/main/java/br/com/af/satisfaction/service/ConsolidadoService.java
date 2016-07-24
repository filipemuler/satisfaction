package br.com.af.satisfaction.service;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.bi.BiConsolidadoFinal;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

/**
 * Created by filipe on 22/07/16.
 */
@Dependent
public class ConsolidadoService {

    private EntityManager em;

    public ConsolidadoService() {
        this(null);
    }

    @Inject
    public ConsolidadoService(EntityManager em) {
        this.em = em;
    }

    public List<BiConsolidadoFinal> getConsolidadoDoMes(){

        LocalDate date = LocalDate.now();

        Session session = (Session) this.em.getDelegate();
        List<BiConsolidadoFinal> result = session.createSQLQuery(
                "select max(data) as data, sum(despesa) as despesa, sum(receita) as receita, round((sum(despesa)/ sum(receita))*100, 2) as porcentagem, filialid, filialnome " +
                "from biconsolidadofinal where filialid in (select id from filial) and data between (date '2016-07-01') and CURRENT_TIMESTAMP group by filialid, filialnome;")
                .setResultTransformer(Transformers.aliasToBean(BiConsolidadoFinal.class))
//                .setParameter("dataInicio", date.with(TemporalAdjusters.firstDayOfMonth()))
                .list();

        return result;
    }

}
