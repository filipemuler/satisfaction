package br.com.af.web.dto;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by filipe on 01/09/16.
 */
public class ContaDiaDTO {

    private Long id;
    private Date data;
    private Long filialId;
    private String filialNome;
    private Long contaId;
    private String conta;
    private BigDecimal contaValor;

    public ContaDiaDTO(Long id, Date data, Long filialId, String filialNome, Long contaId, String conta, BigDecimal contaValor) {
        this.id = id;
        this.data = data;
        this.filialId = filialId;
        this.filialNome = filialNome;
        this.contaId = contaId;
        this.conta = conta;
        this.contaValor = contaValor;
    }

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

    public Long getContaId() {
        return contaId;
    }

    public void setContaId(Long contaId) {
        this.contaId = contaId;
    }

    public String getConta() {
        return conta;
    }

    public void setConta(String conta) {
        this.conta = conta;
    }

    public BigDecimal getContaValor() {
        return contaValor;
    }

    public void setContaValor(BigDecimal contaValor) {
        this.contaValor = contaValor;
    }
}
