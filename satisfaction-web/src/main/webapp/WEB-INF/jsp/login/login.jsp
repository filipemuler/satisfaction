<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core"
	xmlns:h="urn:jsptagdir:/WEB-INF/tags">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />

	<style>
	.form-signin {
		max-width: 330px;
		padding: 15px;
		margin: 0 auto;
	}
	</style>

	<h:login>
		<form class="form-signin" action="${app}/login/login" method="post">
			<h3 class="form-signin-heading">Entrar</h3>
			<div class="form-group">
				<input type="text" class="form-control" placeholder="Email" autofocus="" name="username"/>
			</div>
			<div class="form-group">
				<input type="password" class="form-control" placeholder="Senha" name="password"/>
			</div>
			<!--  
			<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
			--> 
			<button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
		</form>
	</h:login>

</jsp:root>