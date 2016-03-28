<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

        <div class="modal-body" style="width: 500px; margin: 0 auto;">
        	<input type="hidden" name="funcionario.id" value="${funcionario.id}"/>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" name="funcionario.nome" value="${funcionario.nome}"/>
            </div>
            <div class="form-group">
                <label for="cpf">CPF</label>
                <input type="text" class="form-control" name="funcionario.cpf" value="${funcionario.cpf}"/>
            </div>
            <div class="form-group">
                <label for="data">Data de Nascimento</label>
                <input type="date" class="form-control" name="funcionario.dataNascimento" value="${funcionario.dataNascimento}"/>
            </div>
            <div class="form-group">
                <label for="data">Data de Admissão</label>
                <input type="date" class="form-control" name="funcionario.dataAdmissao" ${funcionario.dataAdmissao}/>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label><input type="checkbox" name="funcionario.socio" value="${funcionario.socio}"/> Sócio  </label>
                </div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label><input type="checkbox" name="funcionario.gestorFilial" value="${funcionario.gestorFilial}"/> Gestor Filial  </label>
                </div>
            </div>
        </div>

</jsp:root>