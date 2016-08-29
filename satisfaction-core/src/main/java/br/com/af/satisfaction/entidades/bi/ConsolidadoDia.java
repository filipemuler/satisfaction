package br.com.af.satisfaction.entidades.bi;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

/**
 * Created by filipe on 15/07/16.
 */
@Entity
public class ConsolidadoDia implements Serializable{

    private Long id;
    private Number filialid;
    private String filialnome;
    private Date data;
    private BigDecimal despesa;
    private BigDecimal receita;
    private BigDecimal porcentagem;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFilialid() {
        return filialid.longValue();
    }

    public void setFilialid(Number filialid) {
        this.filialid = filialid;
    }

    public String getFilialnome() {
        return filialnome;
    }

    public void setFilialnome(String filialnome) {
        this.filialnome = filialnome;
    }

    public BigDecimal getDespesa() {
        return despesa;
    }

    public void setDespesa(BigDecimal despesa) {
        this.despesa = despesa;
    }

    public BigDecimal getReceita() {
        return receita;
    }

    public void setReceita(BigDecimal receita) {
        this.receita = receita;
    }

    public BigDecimal getPorcentagem() {
        return porcentagem;
    }

    public void setPorcentagem(BigDecimal porcentagem) {
        this.porcentagem = porcentagem;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }
}
