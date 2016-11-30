package br.com.af.satisfaction.entidades;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Entidade acho que são as emrpesas ligadas ao negocio de alguma forma.
 * <p>Poderão ser fornecedores, pintores, pedreiros, manutenção, serivço de lavanderia e etc...</p>
 *  
 * @author filipe
 */
@Entity
@Table(name = "ENTIDADE")
public class Entidade {

	private Long id;
	private TipoEntidade tipoEntidade;
	private Date dataCadastro;
	private Empresa empresa;
	
	private String contato;
	private String email;
	private String cpf;
	private String rg;
	private Date dataNascimento;
	// nao entendi pra que sao esses campos ai embaixo
	private String pessoa;
	private String telefone;
	private String emailPessoal;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@OneToOne
	@JoinColumn(name = "TIPO_ENTIDADE_ID")
	public TipoEntidade getTipoEntidade() {
		return tipoEntidade;
	}

	public void setTipoEntidade(TipoEntidade tipoEntidade) {
		this.tipoEntidade = tipoEntidade;
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	
	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getPessoa() {
		return pessoa;
	}

	public void setPessoa(String pessoa) {
		this.pessoa = pessoa;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmailPessoal() {
		return emailPessoal;
	}

	public void setEmailPessoal(String emailPessoal) {
		this.emailPessoal = emailPessoal;
	}

}
