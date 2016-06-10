package br.com.af.satisfaction.entidades;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "MOVIMENTACAO")
public class Movimentacao implements Serializable {

    private Long id;
    private BigDecimal valorManha;
    private BigDecimal valorTarde;
    private BigDecimal valorNoite;
    private List<MovimentacaoConta> movimentacoesConta;
    private Usuario usuario;
    private Filial filial;
    private Entidade entidade;
    private Date dataTransacao;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getValorManha() {
        return valorManha;
    }

    public void setValorManha(BigDecimal valorManha) {
        this.valorManha = valorManha;
    }

    public BigDecimal getValorTarde() {
        return valorTarde;
    }

    public void setValorTarde(BigDecimal valorTarde) {
        this.valorTarde = valorTarde;
    }

    public BigDecimal getValorNoite() {
        return valorNoite;
    }

    public void setValorNoite(BigDecimal valorNoite) {
        this.valorNoite = valorNoite;
    }

    @OneToMany(cascade = CascadeType.ALL)
    public List<MovimentacaoConta> getMovimentacoesConta() {
        return movimentacoesConta;
    }

    public void setMovimentacoesConta(List<MovimentacaoConta> movimentacoesConta) {
        this.movimentacoesConta = movimentacoesConta;
    }

    @OneToOne
    @JoinColumn(name = "usuario_id")
    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    @OneToOne
    @JoinColumn(name = "filial_id")
    public Filial getFilial() {
        return filial;
    }

    public void setFilial(Filial filial) {
        this.filial = filial;
    }

    @OneToOne
    @JoinColumn(name = "entidade_id")
    public Entidade getEntidade() {
        return entidade;
    }

    public void setEntidade(Entidade entidade) {
        this.entidade = entidade;
    }

    @Column(name = "data_transacao")
    public Date getDataTransacao() {
        return dataTransacao;
    }

    public void setDataTransacao(Date dataTransacao) {
        this.dataTransacao = dataTransacao;
    }
}
