package br.com.af.satisfaction.entidades.bi;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by filipe on 01/09/16.
 */
@Entity
public class ConsolidadoFluxoDia implements Serializable {

    private Long id;

    private Date data;

    private Long filialId;
    private String filialNome;

    private Long fluxoId;
    private String fluxoNome;
    private Integer fluxoQuantidade;

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

    public Long getFluxoId() {
        return fluxoId;
    }

    public void setFluxoId(Long fluxoId) {
        this.fluxoId = fluxoId;
    }

    public String getFluxoNome() {
        return fluxoNome;
    }

    public void setFluxoNome(String fluxoNome) {
        this.fluxoNome = fluxoNome;
    }

    public Integer getFluxoQuantidade() {
        return fluxoQuantidade;
    }

    public void setFluxoQuantidade(Integer fluxoQuantidade) {
        this.fluxoQuantidade = fluxoQuantidade;
    }
}
