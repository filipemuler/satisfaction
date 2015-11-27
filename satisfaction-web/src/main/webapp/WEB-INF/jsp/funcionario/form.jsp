<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<h:main>
<!-- 
		<form action="${linkTo[FuncionarioController].salva}" method="post"> -->
		<form action="${app}/funcionario/salva" method="post">
			<div class="form-group">
				<label for="nome">Nome</label>
				<input type="text" class="form-control" name="funcionario.nome" />
			</div>
			<div class="form-group">
				<label for="cpf">CPF</label>
				<input type="text" class="form-control" name="funcionario.cpf" />
			</div>
			<button type="submit" class="btn btn-default">Salvar</button>

		</form>

	</h:main>

</jsp:root>