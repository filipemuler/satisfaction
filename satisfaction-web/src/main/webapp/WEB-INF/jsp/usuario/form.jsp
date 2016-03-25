<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />



	<div class="modal-body" style="width: 500px; margin: 0 auto;">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" name="usuario.email" />
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" class="form-control" name="usuario.senha" />
        </div>
        <div class="form-group">
            <label for="data">Data de Cadastro</label>
            <input type="date" class="form-control" name="usuario.dataCadastro" />
        </div>
        <div class="form-group">
            <div class="checkbox">
                <label><input type="checkbox" name="usuario.admin" /> Administrador  </label>
            </div>
        </div>

        <div class="form-group">
        <label for="permissao">Permissões</label>
            <select name="usuario.permissoes[].id" class="form-control"  multiple="multiple" id="my-select" >
                <c:forEach var="permissao" items="${permissoes}">
                	<option value="${permissao.id}">${permissao.rotina}</option>
                </c:forEach>
            </select>
        </div>

    </div>

    <script>
    $('#my-select').multiSelect();
    </script>



</jsp:root>