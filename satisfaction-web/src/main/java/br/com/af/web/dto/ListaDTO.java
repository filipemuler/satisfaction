package br.com.af.web.dto;

import java.util.List;

/**
 * Created by filipe on 01/09/16.
 */
public class ListaDTO<T> {

    private List<T> lista;

    public ListaDTO(List<T> lista) {
        this.lista = lista;
    }
}
