<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<input  type="hidden" value="usuario" id="tela"/>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Cadastro de Usuário</h3>
        </div>
        <div class="panel-body" style="width: 500px; margin: 0 auto;">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>E-mail</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var="usuario" items="${paginator.list}">
                        <tr>
                            <td>${usuario.email}</td>
                            <td style="width: 30px">
                                <button type="button" class="btn btn-default btn-xs"
                                    data-toggle="modal" data-target="#myModal"
                                    data-whatever="usuario/edita/${usuario.id}">
                                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                            </td>
                            <td style="width: 30px">
                                <button type="button" class="btn btn-default btn-xs"
                                    onClick="confirm('Deseja excluir?') ? location.href='${app}/usuario/exclui/${usuario.id}' : ''">
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </button>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <ul class="pagination pagination-sm centered">
                <c:if test="${!empty paginator and paginator.pages > 0}">
                    <c:forEach var="page" begin="0" end="${paginator.pages}">
                        <li><a href="${app}/usuario/list/${page}">${page+1}</a></li>
                    </c:forEach>
                </c:if>
            </ul>
        </div>
        <div class="panel-footer">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-whatever="usuario/form">Criar</button>
        </div>
    </div>

    <h:modal action="${linkTo[UsuarioController].salva}" label="Cadastro de Usuário"/>
    
    

</jsp:root>