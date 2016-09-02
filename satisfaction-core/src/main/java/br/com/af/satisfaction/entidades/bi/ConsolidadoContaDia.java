package br.com.af.satisfaction.entidades.bi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by filipe on 14/07/16.
 */
@Entity
public class ConsolidadoContaDia implements Serializable{

    private Long id;

    private Date data;

    private Long filialId;
    private String filialNome;

    private Long contaId;
    private String conta;
    private BigDecimal contaValor;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Long getFilialId() {
        return filialId;
    }

    public void setFilialId(Long filialId) {
        this.filialId = filialId;
    }

    public String getFilialNome() {
        return filialNome;
    }

    public void setFilialNome(String filialNome) {
        this.filialNome = filialNome;
    }

    public Long getContaid() {
        return contaId;
    }

    public void setContaid(Long contaId) {
        this.contaId = contaId;
    }

    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public BigDecimal getContavalor() {
        return contaValor;
    }

    public void setContavalor(BigDecimal contaValor) {
        this.contaValor = contaValor;
    }

}
