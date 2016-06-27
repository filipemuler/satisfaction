package br.com.af.satisfaction.entidades;

import com.google.common.collect.Lists;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by filipe on 01/02/16.
 */
@Entity
public class Conta implements Serializable {

    private Long id;
    private String nome;
    private String descricao;
    private Integer ordem;
    private List<Conta> contas = Lists.newArrayList();
    private Conta referenteA;
    private String grupo;

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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getOrdem() {
        return ordem;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }

    @OneToMany(mappedBy = "referenteA", cascade = CascadeType.ALL)
    public List<Conta> getContas() {
        return contas;
    }

    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }

    @ManyToOne
    public Conta getReferenteA() {
        return referenteA;
    }

    public void setReferenteA(Conta referenteA) {
        this.referenteA = referenteA;
    }

    @Transient
    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }
}
