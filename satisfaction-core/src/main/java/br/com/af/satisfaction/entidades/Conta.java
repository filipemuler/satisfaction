package br.com.af.satisfaction.entidades;

import com.google.common.collect.Lists;
import org.codehaus.jackson.annotate.JsonIgnore;

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

    @JsonIgnore
    private List<Conta> contas = Lists.newArrayList();
    private Conta referenteA;

    //o pai da arvore, exemplo Despesa > supermercado > coca-cola
    // grupo será Despesa
    private String grupo;

    //para ordenação na tela
    private Integer ordem;

    //indica de é entrada ou saida, para fazer as contas depois
    //como a despesa é generico preciso disso.
    private boolean entrada = true;

    //indica se a conta é para cartão
    private boolean cartao = false;

    //se a conta é usada como agrupador
    //ex: Despesa > supermercado > coca-cola
    // Despesa > supermercado > leite
    // queremos marcar supermercado como agrupador dos itens de supermercado.
    private boolean agrupador = false;

    private Turno turno;

    public Conta() {
    }

    public Conta(String nome, String descricao, Conta referenteA, Integer ordem, boolean entrada, boolean cartao, boolean agrupador, Turno turno) {
        this.nome = nome;
        this.descricao = descricao;
        this.referenteA = referenteA;
        this.ordem = ordem;
        this.entrada = entrada;
        this.cartao = cartao;
        this.agrupador = agrupador;
        this.turno = turno;
    }

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

    public boolean isAgrupador() {
        return agrupador;
    }

    public void setAgrupador(boolean agrupador) {
        this.agrupador = agrupador;
    }

    @Enumerated(EnumType.STRING)
    public Turno getTurno() {
        return turno;
    }

    public void setTurno(Turno turno) {
        this.turno = turno;
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

    public static Conta criarDespesa(String nome, Turno turno, Conta referentea){
        Conta conta = new Conta(nome, nome, referentea, null, false, false, false, turno);
        return conta;
    }

    public static Conta criarDespesaAgrupador(String nome, Turno turno, Conta referentea){
        Conta conta = Conta.criarDespesa(nome, turno, referentea);
        conta.setAgrupador(true);
        return conta;
    }

    public static Conta criarReceitaFixa(String nome, Turno turno, Integer ordem, Conta referentea){
        Conta conta = new Conta(nome, nome, referentea, ordem, true, false, false, turno);
        return conta;
    }

    public static Conta criarRecebimento(String nome, Conta referentea){
        Conta conta = new Conta(nome, nome, referentea, null, true, false, false, null);
        return conta;
    }

    public static Conta criarCartaoEntrada(String nome, Conta referentea){
        Conta conta = new Conta(nome, nome, referentea, null, true, true, false, null);
        return conta;
    }

    public static Conta criarCartaoSaida(String nome, Conta referentea){
        Conta conta = new Conta(nome, nome, referentea, null, false, true, false, null);
        return conta;
    }
}
