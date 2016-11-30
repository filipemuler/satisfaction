package br.com.af.satisfaction.entidades;

import static javax.persistence.GenerationType.AUTO;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.apache.commons.lang3.builder.ToStringBuilder;

import com.google.common.base.Objects.ToStringHelper;

/**
 * matricula vira id no banco, mas criei um transient de matricula
 * sobrenome eu acho inutil, tirei
 * 
 * @author filipe
 *
 */
@Entity
@Table(name = "FUNCIONARIO")
public class Funcionario {

	private Long id;
	private String cpf;
	private String nome;
	private Date dataNascimento;
	private Date dataAdmissao;
	private boolean socio;
	private boolean gestorFilial;

	@Id
	@GeneratedValue(strategy = AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@Transient
	public Long getMatricula(){
		return this.id;
	}
	
	public void setMatricula(Long id){
		this.id = id;
	}
	
	@Column(unique = true)
	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Column(name = "DT_NASCIMENTO")
	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	@Column(name = "DT_ADMISSAO")
	public Date getDataAdmissao() {
		return dataAdmissao;
	}

	public void setDataAdmissao(Date dataAdmissao) {
		this.dataAdmissao = dataAdmissao;
	}

	@Column(name = "FL_SOCIO")
	public boolean isSocio() {
		return socio;
	}

	public void setSocio(boolean socio) {
		this.socio = socio;
	}

	@Column(name = "FL_GESTOR_FILIAL")
	public boolean isGestorFilial() {
		return gestorFilial;
	}

	public void setGestorFilial(boolean gestorFilial) {
		this.gestorFilial = gestorFilial;
	}
	
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}

}
