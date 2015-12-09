<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<h:main>

		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Cadastro de Funcionario</h3>
			</div>
			<form action="${linkTo[FuncionarioController].salva}" method="post">
				<div class="panel-body">
					<div class="form-group">
						<label for="nome">Nome</label>
						<input type="text" class="form-control" name="funcionario.nome" />
					</div>
					<div class="form-group">
						<label for="cpf">CPF</label>
						<input type="text" class="form-control" name="funcionario.cpf" />
					</div>
					<div class="form-group col-xs-2">
						<label for="data">Data de Nascimento</label>
						<input type="date" class="form-control" name="funcionario.dataNascimento" />
					</div>
					<div class="form-group col-xs-2">
						<label for="data">Data de Admissão</label>
						<input type="date" class="form-control" name="funcionario.dataAdmissao" />
					</div>
					<div class="form-group">
						<div class="checkbox">
							<label><input type="checkbox" name="funcionario.socio" /> Sócio  </label>
						</div>
					</div>
					<div class="checkbox">
						<label><input type="checkbox" name="funcionario.gestorFilial" /> Gestor Filial  </label>
					</div>
				</div>
				<div class="panel-footer">
					<button type="submit" class="btn btn-primary">Salvar</button>
				</div>
			</form>
		</div>


	</h:main>

</jsp:root>