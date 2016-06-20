package br.com.af.satisfaction.dto;

import java.util.Iterator;
import java.util.List;

import com.google.common.collect.Lists;

import br.com.af.satisfaction.entidades.Conta;

/**
 * Created by filipe on 20/06/16.
 */
public class MovimentadaoDTO {
    private List<Conta> contas;
    private List<String> grupos = Lists.newArrayList();

    public MovimentadaoDTO(List<Conta> contas) {
        this.contas = contas;

        for (Iterator<Conta> it = contas.iterator(); it.hasNext(); ) {
            Conta conta = it.next();
            if (conta.getReferenteA() == null) {
                this.grupos.add(conta.getNome());
                it.remove();
            }else{
                conta.setGrupo(this.getGrupo(conta));
            }
        }
    }

    private String getGrupo(Conta conta){
        while(conta.getReferenteA() != null){
            return this.getGrupo(conta.getReferenteA());
        }
        return conta.getNome();
    }

    public List<Conta> getContas() {
        return contas;
    }

    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }

    public List<String> getGrupos() {
        return grupos;
    }

    public void setGrupos(List<String> grupos) {
        this.grupos = grupos;
    }
}
