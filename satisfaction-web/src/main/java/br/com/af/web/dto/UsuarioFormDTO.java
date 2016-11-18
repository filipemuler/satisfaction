package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.PerfilUsuario;
import br.com.af.satisfaction.entidades.Turno;
import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by filipe on 02/11/16.
 */
public class UsuarioFormDTO {

    private List<SelectOptionDTO> perfis = Lists.newArrayList();

    public UsuarioFormDTO(List<PerfilUsuario> turnos) {
        for(PerfilUsuario perfil : turnos){
            this.perfis.add(new SelectOptionDTO(String.valueOf(perfil.getId()), null, perfil.getNome()));
        }
    }

    public List<SelectOptionDTO> getPerfis() {
        return perfis;
    }

    public void setPerfis(List<SelectOptionDTO> perfis) {
        this.perfis = perfis;
    }
}
