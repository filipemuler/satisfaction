package br.com.af.web.dto;

import java.awt.*;
import java.io.Serializable;

/**
 * Created by filipe on 17/07/16.
 */
public class DadosGraficoDTO implements Serializable {

    private Long value;
    private String label;
    private String color;
    private String highlight;

    public DadosGraficoDTO(Long value, String label, String color, String highlight) {
        this.value = value;
        this.label = label;
        this.color = color;
        this.highlight = highlight;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getHighlight() {
        return highlight;
    }

    public void setHighlight(String highlight) {
        this.highlight = highlight;
    }
}
