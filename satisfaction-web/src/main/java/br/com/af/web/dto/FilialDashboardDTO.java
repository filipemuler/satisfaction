package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.Filial;
import br.com.af.satisfaction.entidades.bi.BiConsolidadoFinal;
import com.google.common.collect.Lists;

import java.io.Serializable;
import java.util.List;

/**
 * Created by filipe on 17/07/16.
 */
public class FilialDashboardDTO implements Serializable {

    private String nome;
    private float porcentagem;
    private List<DadosGraficoDTO> dados = Lists.newArrayList();

    public FilialDashboardDTO(BiConsolidadoFinal consolidadoFinal) {
        this.nome = consolidadoFinal.getFilialNome();
        this.porcentagem = consolidadoFinal.getPorcentagem();
        this.dados.add(new DadosGraficoDTO(consolidadoFinal.getDespesa().longValue(), "Despesa", "#F7464A", "#FF5A5E"));
        this.dados.add(new DadosGraficoDTO(consolidadoFinal.getReceita().longValue(), "Receita", "#46BFBD", "#5AD3D1"));
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getPorcentagem() {
        return porcentagem;
    }

    public void setPorcentagem(float porcentagem) {
        this.porcentagem = porcentagem;
    }

    public List<DadosGraficoDTO> getDados() {
        return dados;
    }

    public void setDados(List<DadosGraficoDTO> dados) {
        this.dados = dados;
    }
}
