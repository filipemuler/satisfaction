package br.com.af.satisfaction.entidades;

import java.util.List;

import javax.persistence.*;

/**
 * Created by filipe on 14/11/16.
 */
@Entity
@Table(name = "GRUPO_CONTA")
public class GrupoConta {

    private Long id;
    private String nome;
    private List<Conta> contas;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @ManyToMany
    @JoinTable(name = "GRUPOCONTA_CONTA",
            joinColumns = @JoinColumn(name = "GRUPOCONTA_ID") ,
            inverseJoinColumns = @JoinColumn(name = "CONTA_ID"))
    public List<Conta> getContas() {
        return contas;
    }

    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }
}
