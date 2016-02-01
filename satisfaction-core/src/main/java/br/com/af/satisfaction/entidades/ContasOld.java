package br.com.af.satisfaction.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CONTAS")
public class ContasOld implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private AuxContas auxContasId;
	private AuxGrupoContas auxGrupoContasId;
	private AuxTipoContas auxTipoContasId;

	@Id
	@Column(name = "auxcontasid")
	public AuxContas getAuxContasId() {
		return auxContasId;
	}

	public void setAuxContasId(AuxContas auxContasId) {
		this.auxContasId = auxContasId;
	}

	@Id
	@Column(name = "auxgrupocontasid")
	public AuxGrupoContas getAuxGrupoContasId() {
		return auxGrupoContasId;
	}

	public void setAuxGrupoContasId(AuxGrupoContas auxGrupoContasId) {
		this.auxGrupoContasId = auxGrupoContasId;
	}

	@Id
	@Column(name = "auxtipocontasid")
	public AuxTipoContas getAuxTipoContasId() {
		return auxTipoContasId;
	}

	public void setAuxTipoContasId(AuxTipoContas auxTipoContasId) {
		this.auxTipoContasId = auxTipoContasId;
	}

}
