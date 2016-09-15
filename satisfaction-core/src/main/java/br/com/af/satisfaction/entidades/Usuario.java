package br.com.af.satisfaction.entidades;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.codehaus.jackson.annotate.JsonIgnore;

@Entity
@Table(name = "USUARIO")
public class Usuario {

	private Long id;
	private Date dataCadastro;
	private String email;
	private String senha;
	private boolean admin;
	private Filial filial;
	private Funcionario funcionario;
	private List<Permissao> permissoes;
	private List<Turno> turnos;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@JsonIgnore
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	@OneToOne
	@JoinColumn(name = "FILIAL_ID")
	public Filial getFilial() {
		return filial;
	}

	public void setFilial(Filial filial) {
		this.filial = filial;
	}

	@OneToOne
	@JoinColumn(name = "FUNCIONARIO_ID")
	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

	@ManyToMany
	@JoinTable(name = "USUARIO_PERMISSAO", 
		joinColumns = @JoinColumn(name = "USUARIO_ID") , 
		inverseJoinColumns = @JoinColumn(name = "PERMISSAO_ID"))
	public List<Permissao> getPermissoes() {
		return permissoes;
	}

	public void setPermissoes(List<Permissao> permissao) {
		this.permissoes = permissao;
	}

	@ElementCollection
	@CollectionTable(name="usuario_turno", joinColumns=@JoinColumn(name="usuario_id"))
	@Column(name="turno")
	public List<Turno> getTurnos() {
		return turnos;
	}

	public void setTurnos(List<Turno> turnos) {
		this.turnos = turnos;
	}
}
