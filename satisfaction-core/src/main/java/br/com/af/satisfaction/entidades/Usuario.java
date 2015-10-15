package br.com.af.satisfaction.entidades;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "USUARIO")
public class Usuario {

	private Long id;
	private Date dataCadastro;
	private Funcionario funcionario;
	
}
