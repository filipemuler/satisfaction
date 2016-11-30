package br.com.af.satisfaction.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Permissões para o usuario.
 * 
 * <p>A rotina será uam sigla e o tipo será uma breve descricao do que essa rotina permite.</p>
 * 
 * <p>ex: <br/>rotina: ADMIN<br/>tipo: Pode fazer tudo no sistema.</p> 
 * @author filipe
 */
@Entity
@Table(name = "PERMISSAO")
public class Permissao {

	private Long id;
	private String rotina;
	private String tipo;

	public Permissao() {
	}

	public Permissao(String rotina, String tipo) {
		this.rotina = rotina;
		this.tipo = tipo;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(unique = true)
	public String getRotina() {
		return rotina;
	}

	public void setRotina(String rotina) {
		this.rotina = rotina;
	}

	@Column(unique = true)
	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

}
