package br.com.af.satisfaction.entidades;

public enum TipoLogradouro {
	AEROPORTO		("AER"), 
	ALAMEDA			("AL"), 
	APARTAMENTO		("AP"), 
	AVENIDA			("AV"), 
	BECO			("BC"), 
	BLOCO			("BL"), 
	CAMINHO			("CAM"), 
	ESCADINHA		("ESCD"), 
	ESTACAO			("EST"), 
	ESTRADA			("ETR"), 
	FAZENDA			("FAZ"), 
	FORTALEZA 		("FORT"), 
	GALERIA 		("GL"), 
	LADEIRA 		("LD"),
	LARGO 			("LGO"), 
	PRACA 			("PÇA"), 
	PARQUE 			("PRQ"), 
	PRAIA 			("PR"), 
	QUADRA 			("QD"), 
	QUILOMETRO 		("KM"), 
	QUINTA 			("QTA"), 
	RODOVIA 		("ROD"), 
	RUA 			("R"), 
	SUPER_QUADRA 	("SQD"), 
	TRAVESSA 		("TRV"), 
	VIADUTO 		("VD"), 
	VILA 			("VL");
	
	private String sigla;
	
	private TipoLogradouro(String sigla) {
		this.sigla = sigla;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
	
}
