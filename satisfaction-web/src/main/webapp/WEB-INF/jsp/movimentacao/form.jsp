<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<h:main>

		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Movimentação</h3>
			</div>
			<form action="${linkTo[MovimentacaoController].salva}" method="post">
				<div class="panel-body" style="width: 500px; margin: 0 auto;">

                    <div class="form-group">
                        <label for="contas">Conta</label>
                        <select name="movimentacao.conta.id" class="form-control">
                            <c:forEach var="conta" items="${contas}">
                                <c:choose>
                                    <c:when test="${movimentacao.conta.id == conta.id}">
                                        <option selected="selected" value="${conta.id}">${conta.nome}</option>
                                    </c:when>
                                    <c:otherwise>
                                        <option value="${conta.id}">${conta.nome}</option>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="valor">Valor</label>
                        <input type="number" class="form-control" name="movimentacao.valor" pattern="^\d+(\.|\,)\d{2}$"/>
                    </div>
				</div>
				<div class="panel-footer">
					<button type="submit" class="btn btn-primary">Salvar</button>
				</div>
			</form>
		</div>


	</h:main>

</jsp:root>