<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:fmt="http://java.sun.com/jsp/jstl/fmt"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />


    <div class="panel-body" style="width: 500px; margin: 0 auto;">
    	<input type="hidden" name="filial.id" value="${filial.id}"/>
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" name="filial.nome" value="${filial.nome}"/>
        </div>
        <div class="form-group">
            <label for="tipoEstabelecimento">Tipo de Estabelecimento</label>
            <input type="text" class="form-control" name="filial.tipoEstabelecimento" value="${filial.tipoEstabelecimento}"/>
        </div>
        <div class="form-group">
            <label for="razaoSocial">Razão Social</label>
            <input type="text" class="form-control" name="filial.razaoSocial" value="${filial.razaoSocial}"/>
        </div>
        <div class="form-group">
            <label for="cnpj">CNPJ</label>
            <input type="text" class="form-control" name="filial.cnpj" value="${filial.cnpj}"/>
        </div>
        <div class="form-group">
            <label for="inscricaoEstadual">Inscrição Estadual</label>
            <input type="text" class="form-control" name="filial.inscricaoEstadual" value="${filial.inscricaoEstadual}"/>
        </div>
        <div class="form-group">
            <label for="cep">CEP</label>
            <input type="text" class="form-control" name="filial.endereco.cep" value="${filial.endereco.cep}"/>
        </div>
        <div class="form-group">
            <label for="tipoLogradouro">Tipo de Logradouro</label>
            <select name="filial.endereco.tipoLogradouro" class="form-control">
                <c:forEach var="tipo" items="${tiposLogradouros}">
                    <c:choose>
                        <c:when test="${filial.endereco.tipoLogradouro == tipo}">
                            <option selected="selected" value="${tipo}"><fmt:message key="TipoLogradouro.${tipo}" /></option>
                        </c:when>
                        <c:otherwise>
                            <option value="${tipo}"><fmt:message key="TipoLogradouro.${tipo}" /></option>
                        </c:otherwise>
                    </c:choose>
                </c:forEach>
            </select>
        </div>
        <div class="form-group">
            <label for="nomeLogradouro">Logradouro</label>
            <input type="text" class="form-control" name="filial.endereco.nomeLogradouro" value="${filial.endereco.nomeLogradouro}"/>
        </div>
        <div class="form-group">
            <label for="numero">Número</label>
            <input type="text" class="form-control" name="filial.endereco.numero" value="${filial.endereco.numero}"/>
        </div>
        <div class="form-group">
            <label for="complemento">Complemento</label>
            <input type="text" class="form-control" name="filial.endereco.complemento" value="${filial.endereco.complemento}"/>
        </div>
        <div class="form-group">
            <label for="bairro">Bairro</label>
            <input type="text" class="form-control" name="filial.endereco.bairro" value="${filial.endereco.bairro}"/>
        </div>
        <div class="form-group">
            <label for="localidade">Localidade</label>
            <input type="text" class="form-control" name="filial.endereco.localidade" value="${filial.endereco.localidade}"/>
        </div>
        <div class="form-group">
            <label for="uf">UF</label>
            <input type="text" class="form-control" name="filial.endereco.uf" value="${filial.endereco.uf}"/>
        </div>
        <div class="form-group">
            <label for="pais">Pais</label>
            <input type="text" class="form-control" name="filial.endereco.pais" value="${filial.endereco.pais}"/>
        </div>
    </div>

</jsp:root>