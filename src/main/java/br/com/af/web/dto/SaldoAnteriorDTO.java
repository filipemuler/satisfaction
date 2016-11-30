package br.com.af.web.dto;

import java.math.BigDecimal;

/**
 * Created by filipe on 30/10/16.
 */
public class SaldoAnteriorDTO {

    private BigDecimal saldoAnterior;

    public SaldoAnteriorDTO(BigDecimal saldoAnterior) {
        this.saldoAnterior = saldoAnterior;
    }

    public BigDecimal getSaldoAnterior() {
        return saldoAnterior;
    }

    public void setSaldoAnterior(BigDecimal saldoAnterior) {
        this.saldoAnterior = saldoAnterior;
    }
}
