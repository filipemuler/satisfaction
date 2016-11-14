package br.com.af.satisfaction.entidades;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Created by filipe on 14/11/16.
 */
@Entity
@Table(name = "PERFIL_USUARIO")
public class PerfilUsuario {

    private Long id;
    private String nome;
    private GrupoConta grupoConta;
    private List<Permissao> permissoes;

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

    @OneToOne
    @JoinColumn(name = "GRUPO_CONTA_ID")
    public GrupoConta getGrupoConta() {
        return grupoConta;
    }

    public void setGrupoConta(GrupoConta grupoConta) {
        this.grupoConta = grupoConta;
    }

    @ManyToMany
    @JoinTable(name = "USUARIO_PERMISSAO",
            joinColumns = @JoinColumn(name = "USUARIO_ID") ,
            inverseJoinColumns = @JoinColumn(name = "PERMISSAO_ID"))
    public List<Permissao> getPermissoes() {
        return permissoes;
    }

    public void setPermissoes(List<Permissao> permissoes) {
        this.permissoes = permissoes;
    }
}
