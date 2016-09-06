package br.com.af.satisfaction.service;

import static java.time.ZoneId.systemDefault;
import static java.time.temporal.TemporalAdjusters.firstDayOfMonth;

import br.com.af.satisfaction.entidades.bi.ConsolidadoContaDia;
import br.com.af.satisfaction.entidades.bi.ConsolidadoMes;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
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
    public List<ConsolidadoMes> getConsolidadoDoMes(){

        LocalDate date = LocalDate.now();

        Session session = (Session) this.em.getDelegate();
        List<ConsolidadoMes> result = session.createSQLQuery(
                "select max(data) as data, " +
                        "sum(despesa) as despesa, " +
                        "sum(receita) as receita, " +
                        "round((sum(despesa)/ (sum(receita)+sum(despesa)))*100, 2) as porcentagem, " +
                        "filialid, " +
                        "filialnome " +
                "from consolidadomes where " +
                        "filialid in (select id from filial) " +
                        "and data between :dataInicio and CURRENT_TIMESTAMP " +
                        "group by filialid, filialnome;")
                .setResultTransformer(Transformers.aliasToBean(ConsolidadoMes.class))
                .setDate("dataInicio",
                        Date.from(
                                date.with(firstDayOfMonth()).atStartOfDay(systemDefault()).toInstant()))
                .list();

        return result;
    }

    /**
     * Recupera o consolidado de contas por dia por filial para o mes corrente
     *
     * @param id o ID da filial
     * @return
     */
    @SuppressWarnings("unchecked")
    public List<ConsolidadoContaDia> getConsolidadoContasDiaByFilial(Long id){
        LocalDate date = LocalDate.now();

        Session session = (Session) this.em.getDelegate();
        List<ConsolidadoContaDia> result = session.createSQLQuery(
                "select ccd.conta as conta, ccd.contaid as contaId, sum(ccd.contavalor) as contaValor, " +
                        "ccd.agrupadorcontaid as agrupadorContaId, agrupadorconta as agrupadorConta " +
                        "from consolidadocontadia ccd where " +
                        ":filialid in (select id from filial) " +
                        "and ccd.data between :dataInicio and CURRENT_TIMESTAMP " +
                        "and ccd.contavalor != 0 " +
                        "group by conta, contaId, agrupadorContaId, agrupadorConta")
                .addScalar("conta", StandardBasicTypes.STRING)
                .addScalar("contaId", StandardBasicTypes.LONG)
                .addScalar("contaValor", StandardBasicTypes.BIG_DECIMAL)
                .addScalar("agrupadorConta", StandardBasicTypes.STRING)
                .addScalar("agrupadorContaId", StandardBasicTypes.LONG)
                .setLong("filialid", id)
                .setDate("dataInicio",
                        Date.from(
                                date.with(
                                        firstDayOfMonth()).atStartOfDay(systemDefault()).toInstant()))
                .setResultTransformer(Transformers.aliasToBean(ConsolidadoContaDia.class))
                .list();
        return result;
    }

}
