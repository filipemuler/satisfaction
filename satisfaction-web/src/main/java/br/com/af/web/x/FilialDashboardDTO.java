package br.com.af.web.x;

import br.com.af.satisfaction.entidades.Filial;

import java.io.Serializable;
import java.util.List;

/**
 * Created by filipe on 17/07/16.
 */
public class FilialDashboardDTO implements Serializable {

    private String nome;
    private List<DadosGraficoDTO> dados;

    public FilialDashboardDTO(Filial filial) {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<DadosGraficoDTO> getDados() {
        return dados;
    }

    public void setDados(List<DadosGraficoDTO> dados) {
        this.dados = dados;
    }
}
