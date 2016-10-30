package br.com.af.web.dto;

import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Turno;
import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by filipe on 02/10/16.
 */
public class ContaFormDTO {

    private List<SelectOptionDTO> contas = Lists.newArrayList();
    private List<SelectOptionDTO> turnos = Lists.newArrayList();

    public ContaFormDTO() {
    }

    public ContaFormDTO(List<Conta> contas, List<Turno> turnos) {
        for(Conta conta : contas){
            this.getContas().add(new SelectOptionDTO(Long.toString(conta.getId()), null, conta.getNome()));
        }
        for(Turno turno : turnos){
            this.getTurnos().add(new SelectOptionDTO(turno.name(), null, turno.name()));
        }
    }

    public List<SelectOptionDTO> getContas() {
        return contas;
    }

    public void setContas(List<SelectOptionDTO> contas) {
        this.contas = contas;
    }

    public List<SelectOptionDTO> getTurnos() {
        return turnos;
    }

    public void setTurnos(List<SelectOptionDTO> turnos) {
        this.turnos = turnos;
    }
}
