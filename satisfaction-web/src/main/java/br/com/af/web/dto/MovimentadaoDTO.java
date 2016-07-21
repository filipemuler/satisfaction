package br.com.af.web.dto;

import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

import com.google.common.collect.Lists;

import br.com.af.satisfaction.entidades.Conta;
import br.com.af.satisfaction.entidades.Filial;

/**
 * Created by filipe on 20/06/16.
 */
public class MovimentadaoDTO {

    private List<SelectGroupDTO> grupos = Lists.newArrayList();
    private List<SelectOptionDTO> receitasFixas = Lists.newArrayList();
    private List<SelectOptionDTO> despesas = Lists.newArrayList();
    private List<SelectOptionDTO> recebimentos = Lists.newArrayList();
    private List<SelectOptionDTO> filiais = Lists.newArrayList();

    public MovimentadaoDTO(List<Conta> contas, List<Filial> filiais) {

        Collections.sort(contas);
        for(Conta conta : contas){
            if (conta.getReferenteA() == null) {
                this.grupos.add(new SelectGroupDTO(conta.getNome(), conta.getNome()));
            } else if(conta.getOrdem() != null){
                this.receitasFixas.add(this.getOption(conta));
            }else if(conta.isEntrada()){
                this.recebimentos.add(this.getOption(conta));
            }else{
                this.despesas.add(this.getOption(conta));
            }
        }

        for(Filial filial : filiais){
            this.filiais.add(new SelectOptionDTO(Long.toString(filial.getId()), null, filial.getNome()));
        }
    }

    private SelectOptionDTO getOption(Conta conta){
        return new SelectOptionDTO(Long.toString(conta.getId()), null, conta.getNome());
    }

    private String getGrupo(Conta conta){
        while(conta.getReferenteA() != null){
            return this.getGrupo(conta.getReferenteA());
        }
        return conta.getNome();
    }

    public List<SelectGroupDTO> getGrupos() {
        return grupos;
    }

    public void setGrupos(List<SelectGroupDTO> grupos) {
        this.grupos = grupos;
    }

    public List<SelectOptionDTO> getReceitasFixas() {
        return receitasFixas;
    }

    public void setReceitasFixas(List<SelectOptionDTO> receitasFixas) {
        this.receitasFixas = receitasFixas;
    }

    public List<SelectOptionDTO> getFiliais() {
        return filiais;
    }

    public void setFiliais(List<SelectOptionDTO> filiais) {
        this.filiais = filiais;
    }

    public List<SelectOptionDTO> getDespesas() {
        return despesas;
    }

    public void setDespesas(List<SelectOptionDTO> despesas) {
        this.despesas = despesas;
    }

    public List<SelectOptionDTO> getRecebimentos() {
        return recebimentos;
    }

    public void setRecebimentos(List<SelectOptionDTO> recebimentos) {
        this.recebimentos = recebimentos;
    }
}
