package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.Turno;
import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by filipe on 02/11/16.
 */
public class UsuarioFormDTO {

    private List<SelectOptionDTO> turnos = Lists.newArrayList();

    public UsuarioFormDTO(List<Turno> turnos) {
        for(Turno turno : turnos){
            this.getTurnos().add(new SelectOptionDTO(turno.name(), null, turno.name()));
        }
    }

    public List<SelectOptionDTO> getTurnos() {
        return turnos;
    }

    public void setTurnos(List<SelectOptionDTO> turnos) {
        this.turnos = turnos;
    }
}
