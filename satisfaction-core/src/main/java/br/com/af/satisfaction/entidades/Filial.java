package br.com.af.satisfaction.entidades;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Representa uma filial do negocio. 
 * @author filipe
 */
@Entity
@Table(name = "FILIAL")
public class Filial extends Empresa implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String nome;
	private String tipoEstabelecimento;
	private Usuario gestor;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipoEstabelecimento() {
		return tipoEstabelecimento;
	}

	public void setTipoEstabelecimento(String tipoEstabelecimento) {
		this.tipoEstabelecimento = tipoEstabelecimento;
	}

	@OneToOne
	@JoinColumn(name = "USUARIO_ID")
	public Usuario getGestor() {
		return gestor;
	}

	public void setGestor(Usuario gestor) {
		this.gestor = gestor;
	}

}
