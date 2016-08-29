package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.bi.ConsolidadoDia;
import com.google.common.collect.Lists;

import java.io.Serializable;
import java.util.List;

/**
 * Created by filipe on 17/07/16.
 */
public class DashboardDTO implements Serializable {

    private List<FilialDashboardDTO> filiais = Lists.newArrayList();

    public DashboardDTO(List<ConsolidadoDia> finais) {
        for(ConsolidadoDia consolidadoFinal : finais){
            this.filiais.add(new FilialDashboardDTO(consolidadoFinal));
        }
    }

    public List<FilialDashboardDTO> getFiliais() {
        return filiais;
    }

    public void setFiliais(List<FilialDashboardDTO> filiais) {
        this.filiais = filiais;
    }
}
