<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<div class="modal-body" style="width: 500px; margin: 0 auto;">
		<input type="hidden" name="permissao.id" value="${permissao.id}"/>
        <div class="form-group">
            <label for="rotina">Rotina</label>
            <input type="text" class="form-control" name="permissao.rotina" value="${permissao.rotina}"/>
        </div>
        <div class="form-group">
            <label for="tipo">Tipo</label>
            <input type="text" class="form-control" name="permissao.tipo" value="${permissao.tipo}"/>
        </div>
    </div>


</jsp:root>