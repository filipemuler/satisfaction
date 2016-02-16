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
				<h3 class="panel-title">Cadastro de Funcionario</h3>
			</div>
            <div class="panel-body" style="width: 500px; margin: 0 auto;">
                <table class="table table-hover">
                	<thead>
                		<tr>
                			<th>Nome</th>
                			<th>CPF</th>
                			<th>Data Nascimento</th>
                		</tr>
                	</thead>
                	<tbody>
                	    <c:forEach var="funcionario" items="${paginator.list}">
                            <tr>
                                <td>${funcionario.nome}</td>
                                <td>${funcionario.cpf}</td>
                                <td>${funcionario.dataNascimento}</td>
                            </tr>
                		</c:forEach>
                	</tbody>
                </table>
                <ul class="pagination pagination-sm centered">
                    <!--
                    <li>
                      <a href="#" aria-label="Previous">
                        <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                      </a>
                    </li>
                    -->
                    <c:if test="${!empty paginator and paginator.pages > 0}">
                        <c:forEach var="page" begin="0" end="${paginator.pages}">
                            <li><a href="${app}/funcionario/list/${page}">${page+1}</a></li>
                        </c:forEach>
                    </c:if>
                    <!--
                    <li>
                      <a href="#" aria-label="Next">
                        <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                      </a>
                    </li>
                    -->
                </ul>
            </div>
            <div class="panel-footer">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Criar</button>
            </div>
		</div>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
            <!--
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
              -->
                <jsp:include page="./form.jsp"/>
                <!--
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
              -->
            </div>
          </div>
        </div>

	</h:main>

</jsp:root>