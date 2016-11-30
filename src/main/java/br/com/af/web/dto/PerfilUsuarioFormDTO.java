package br.com.af.web.dto;

import java.util.List;

import com.google.common.collect.Lists;

import br.com.af.satisfaction.entidades.GrupoConta;
import br.com.af.satisfaction.entidades.Permissao;

/**
 * Created by filipe on 14/11/16.
 */
public class PerfilUsuarioFormDTO {

    private List<SelectOptionDTO> grupos = Lists.newArrayList();
    private List<SelectOptionDTO> permissoes = Lists.newArrayList();

    public PerfilUsuarioFormDTO(List<GrupoConta> grupos, List<Permissao> permissoes) {
        for(GrupoConta grupo : grupos){
            this.grupos.add(new SelectOptionDTO(Long.toString(grupo.getId()), null, grupo.getNome()));
        }
        for(Permissao permissao : permissoes){
            this.permissoes.add(new SelectOptionDTO(Long.toString(permissao.getId()), null, permissao.getRotina()));
        }
    }

    public List<SelectOptionDTO> getGrupos() {
        return grupos;
    }

    public void setGrupos(List<SelectOptionDTO> grupos) {
        this.grupos = grupos;
    }

    public List<SelectOptionDTO> getPermissoes() {
        return permissoes;
    }

    public void setPermissoes(List<SelectOptionDTO> permissoes) {
        this.permissoes = permissoes;
    }
}
