<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Cadastro de Conta</h3>
        </div>
        <form action="${linkTo[ContaController].salva}" method="post">
            <div class="panel-body" style="width: 500px; margin: 0 auto;">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" name="conta.nome" />
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição</label>
                    <input type="text" class="form-control" name="conta.descricao" />
                </div>
                <c:if test="${not empty contas}">
                    <div class="form-group">
                        <label for="contas">Conta Referente a</label>
                        <select name="conta.referenteA.id" class="form-control">
                            <c:forEach var="conta" items="${contas}">
                                <c:choose>
                                    <c:when test="${conta.referenteA.id == conta.id}">
                                        <option selected="selected" value="${conta.id}">${conta.nome}</option>
                                    </c:when>
                                    <c:otherwise>
                                        <option value="${conta.id}">${conta.nome}</option>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </select>
                    </div>
                </c:if>
            </div>
            <div class="panel-footer">
                <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </form>
    </div>

</jsp:root>