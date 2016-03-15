<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

    <style>
        .centered {
          position: relative;
          top: 50%;
          left: 50%;
          /* bring your own prefixes */
          transform: translate(-50%, -50%);
        }
    </style>


	<h:main>

		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Cadastro de Usuário</h3>
			</div>
            <div class="panel-body" style="width: 500px; margin: 0 auto;">
                <table class="table table-hover">
                	<thead>
                		<tr>
                			<th>E-mail</th>
                		</tr>
                	</thead>
                	<tbody>
                	    <c:forEach var="usuario" items="${paginator.list}">
                            <tr>
                                <td>${usuario.email}</td>
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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Criar</button>
            </div>
		</div>

        <h:modal action="${linkTo[UsuarioController].salva}"/>

	</h:main>

</jsp:root>