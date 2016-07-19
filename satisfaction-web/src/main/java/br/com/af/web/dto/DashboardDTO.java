package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.Filial;
import com.google.common.collect.Lists;

import java.io.Serializable;
import java.util.List;

/**
 * Created by filipe on 17/07/16.
 */
public class DashboardDTO implements Serializable {

    private List<FilialDashboardDTO> filiais = Lists.newArrayList();

    public DashboardDTO(List<Filial> filiais) {
        for(Filial filial : filiais){
//            FilialDashboardDTO filialDashboardDTO = new FilialDashboardDTO();

        }
    }

    public List<FilialDashboardDTO> getFiliais() {
        return filiais;
    }

    public void setFiliais(List<FilialDashboardDTO> filiais) {
        this.filiais = filiais;
    }
}
