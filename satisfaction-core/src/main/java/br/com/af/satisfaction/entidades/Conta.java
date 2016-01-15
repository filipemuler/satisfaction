package br.com.af.satisfaction.entidades;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.google.common.collect.Lists;

@Entity
public class Conta implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long id;
	private String nome;
	private String descricao;
	private List<Conta> contas = Lists.newArrayList();
	private Conta contaPai;

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

	@OneToMany(mappedBy = "contaPai", cascade = CascadeType.ALL)
	public List<Conta> getContas() {
		return contas;
	}

	public void setContas(List<Conta> contas) {
		this.contas = contas;
	}

	@ManyToOne
	public Conta getContaPai() {
		return contaPai;
	}

	public void setContaPai(Conta contaPai) {
		this.contaPai = contaPai;
	}
	
}
