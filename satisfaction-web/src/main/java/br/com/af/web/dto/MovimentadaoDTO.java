package br.com.af.web.dto;

import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

import com.google.common.collect.Lists;

import br.com.af.satisfaction.entidades.Conta;

/**
 * Created by filipe on 20/06/16.
 */
public class MovimentadaoDTO {
    private List<SelectOptionDTO> contas = Lists.newArrayList();
    private List<SelectGroupDTO> grupos = Lists.newArrayList();
    private List<Conta> receitasFixas = Lists.newArrayList();

    public MovimentadaoDTO(List<Conta> contas) {

        for (Iterator<Conta> it = contas.iterator(); it.hasNext(); ) {
            Conta conta = it.next();
            if(conta.getOrdem() != null){
                this.receitasFixas.add(conta);
            }
            if (conta.getReferenteA() == null) {
                this.grupos.add(new SelectGroupDTO(conta.getNome(), conta.getNome()));
                it.remove();
            }else{
                conta.setGrupo(this.getGrupo(conta));
                this.contas.add(new SelectOptionDTO(conta.getId(), conta.getGrupo(), conta.getLabel()));
            }
        }
        Collections.sort(this.receitasFixas, new Comparator<Conta>() {
            @Override
            public int compare(Conta o1, Conta o2) {
                if(o1 == null){
                    return -1;
                }
                if(o2 == null){
                    return 1;
                }
                return o1.getOrdem().compareTo(o2.getOrdem());
            }
        });
    }

    private String getGrupo(Conta conta){
        while(conta.getReferenteA() != null){
            return this.getGrupo(conta.getReferenteA());
        }
        return conta.getNome();
    }

    public List<SelectOptionDTO> getContas() {
        return contas;
    }

    public void setContas(List<SelectOptionDTO> contas) {
        this.contas = contas;
    }

    public List<SelectGroupDTO> getGrupos() {
        return grupos;
    }

    public void setGrupos(List<SelectGroupDTO> grupos) {
        this.grupos = grupos;
    }

    public List<Conta> getReceitasFixas() {
        return receitasFixas;
    }

    public void setReceitasFixas(List<Conta> receitasFixas) {
        this.receitasFixas = receitasFixas;
    }
}
