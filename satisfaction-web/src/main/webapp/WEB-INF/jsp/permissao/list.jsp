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
            <div class="panel-body" style="width: 500px; margin: 0 auto;">
                <table class="table table-hover">
                	<thead>
                		<tr>
                			<th>Rotina</th>
                			<th>Tipo</th>
                			<th></th>
                			<th></th>
                		</tr>
                	</thead>
                	<tbody>
                	    <c:forEach var="permissao" items="${paginator.list}">
                            <tr>
                                <td>${permissao.rotina}</td>
                                <td>${permissao.tipo}</td>
                                <td style="width: 30px">
                                	<button type="button" class="btn btn-default btn-xs"
                                		data-toggle="modal" data-target="#myModal" 
                                		data-whatever="permissao/edita/${permissao.id}">
										<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
									</button>
                                </td>
                                <td style="width: 30px">
                                	<button type="button" class="btn btn-default btn-xs" 
                                		onClick="confirm('Deseja excluir?') ? location.href='${app}/permissao/exclui/${permissao.id}' : ''">
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
                            <li><a href="${app}/permissao/list/${page}">${page+1}</a></li>
                        </c:forEach>
                    </c:if>
                </ul>
            </div>
            <div class="panel-footer">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-whatever="permissao/form">Criar</button>
            </div>
		</div>

        <h:modal action="${linkTo[PermissaoController].salva}" label="Cadastro de Permissão"/>

	</h:main>

</jsp:root>