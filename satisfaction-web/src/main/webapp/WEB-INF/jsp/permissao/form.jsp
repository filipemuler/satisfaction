<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<h:main>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Cadastro de Permissão</h3>
			</div>
			<form action="${linkTo[PermissaoController].salva}" method="post">
				<div class="panel-body" style="width: 500px; margin: 0 auto;">
					<div class="form-group">
						<label for="rotina">Rotina</label>
						<input type="text" class="form-control" name="permissao.rotina" />
					</div>
					<div class="form-group">
						<label for="tipo">Tipo</label>
						<input type="text" class="form-control" name="permissao.tipo" />
					</div>
				</div>
				<div class="panel-footer">
					<button type="submit" class="btn btn-primary">Salvar</button>
				</div>
			</form>
		</div>
	</h:main>

</jsp:root>