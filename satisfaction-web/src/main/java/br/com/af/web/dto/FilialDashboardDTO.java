package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.bi.ConsolidadoDia;
import com.google.common.collect.Lists;

import java.io.Serializable;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created by filipe on 17/07/16.
 */
public class FilialDashboardDTO implements Serializable {

    private Long id;
    private String nome;
    private BigDecimal porcentagem;
    private String data;
    private List<DadosGraficoDTO> dados = Lists.newArrayList();

    public FilialDashboardDTO(ConsolidadoDia consolidadoFinal) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM");
        this.id = consolidadoFinal.getFilialid().longValue();
        this.nome = consolidadoFinal.getFilialnome();
        this.porcentagem = consolidadoFinal.getPorcentagem();
        this.data = sdf.format(consolidadoFinal.getData());
        this.dados.add(new DadosGraficoDTO(consolidadoFinal.getDespesa(), "Despesa", "#F7464A", "#FF5A5E"));
        this.dados.add(new DadosGraficoDTO(consolidadoFinal.getReceita(), "Receita", "#46BFBD", "#5AD3D1"));
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getPorcentagem() {
        return porcentagem;
    }

    public void setPorcentagem(BigDecimal porcentagem) {
        this.porcentagem = porcentagem;
    }

    public List<DadosGraficoDTO> getDados() {
        return dados;
    }

    public void setDados(List<DadosGraficoDTO> dados) {
        this.dados = dados;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
