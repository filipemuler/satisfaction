package br.com.af.satisfaction.entidades;

import com.google.common.collect.Lists;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Comparator;
import java.util.List;

/**
 * Created by filipe on 01/02/16.
 */
@Entity
public class Conta implements Serializable, Comparable<Conta> {

    private Long id;
    private String nome;
    private String descricao;

    private List<Conta> contas = Lists.newArrayList();
    private Conta referenteA;

    //o pai da arvore, exemplo Despesa > coca-cola
    // grupo será Despesa
    private String grupo;

    //para ordenação na tela
    private Integer ordem;

    //indica de é entrada ou saida, para fazer as contas depois
    //como a despesa é generico preciso disso.
    private boolean entrada = true;

    //indica se a conta é para cartão
    private boolean cartao = false;

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

    public boolean isEntrada() {
        return entrada;
    }

    public void setEntrada(boolean entrada) {
        this.entrada = entrada;
    }

    @Transient
    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    public boolean isCartao() {
        return cartao;
    }

    public void setCartao(boolean cartao) {
        this.cartao = cartao;
    }

    @Transient
    public String getLabel(){
        return this.nome;
    }

    @Override
    public int compareTo(Conta o) {
        if(this == null){
            return -1;
        }
        if(o == null){
            return 1;
        }
        if(this.getOrdem() == null && o.getOrdem() == null){
            return this.getNome().compareTo(o.getNome());
        }
        if(this.getOrdem() != null){
            if(o.getOrdem() == null){
                return 1;
            }
        }
        if(o.getOrdem() != null){
            if(this.getOrdem() == null){
                return -1;
            }
        }
        return this.getOrdem().compareTo(o.getOrdem());
    }
}
