package br.com.af.web.dto;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by filipe on 01/09/16.
 */
public class ListaDTO<T> {

    private List<T> lista = Lists.newArrayList();

    public ListaDTO(List<T> t) {
        this.lista = t;
    }

    public List<T> getLista() {
        return lista;
    }

    public void setLista(List<T> lista) {
        this.lista = lista;
    }
}
