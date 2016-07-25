package br.com.af.satisfaction.service;

import br.com.af.satisfaction.config.GenericDao;
import br.com.af.satisfaction.entidades.bi.BiConsolidadoFinal;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;
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

    @SuppressWarnings("unchecked")
    public List<BiConsolidadoFinal> getConsolidadoDoMes(){

        LocalDate date = LocalDate.now();

        Session session = (Session) this.em.getDelegate();
        List<BiConsolidadoFinal> result = session.createSQLQuery(
                "select max(data) as data, " +
                        "sum(despesa) as despesa, " +
                        "sum(receita) as receita, " +
                        "round((sum(despesa)/ sum(receita))*100, 2) as porcentagem, " +
                        "filialid, " +
                        "filialnome " +
                "from biconsolidadofinal where " +
                        "filialid in (select id from filial) " +
                        "and data between :dataInicio and CURRENT_TIMESTAMP " +
                        "group by filialid, filialnome;")
                .setResultTransformer(Transformers.aliasToBean(BiConsolidadoFinal.class))
                .setDate("dataInicio", Date.from(date.with(TemporalAdjusters.firstDayOfMonth()).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .list();

        return result;
    }

    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        System.out.println(date.with(TemporalAdjusters.firstDayOfMonth()).toString());

        Date data = Date.from(date.with(TemporalAdjusters.firstDayOfMonth()).atStartOfDay(ZoneId.systemDefault()).toInstant());
        System.out.println(data);
    }

}
