package br.com.af.satisfaction.entidades;

import static javax.persistence.GenerationType.SEQUENCE;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "AUX_GRUPOCONTAS")
public class AuxGrupoContas {

	private Long id;
	private String nome;
	private Date dataCadastro;
	private Usuario usuario;
	private Date ultimaModificacao;

	@Id
	@SequenceGenerator(name = "sequence", sequenceName = "TAB_SEQUENCE")
	@GeneratedValue(generator = "sequence", strategy = SEQUENCE)
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

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Date getUltimaModificacao() {
		return ultimaModificacao;
	}

	public void setUltimaModificacao(Date ultimaModificacao) {
		this.ultimaModificacao = ultimaModificacao;
	}

}
